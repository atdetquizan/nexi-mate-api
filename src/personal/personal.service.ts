import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Personal } from 'generated/prisma';
import { CreatePersonalDto } from './dto/personal-user.dto';

@Injectable()
export class PersonalService {
  constructor(private prisma: PrismaService) {}

  // Obtener un usuario por ID o documento único
  async findOne(
    personalWhereUniqueInput: Prisma.PersonalWhereUniqueInput,
  ): Promise<Personal | null> {
    return this.prisma.personal.findUnique({
      where: personalWhereUniqueInput,
    });
  }

  // Listar todos los usuarios con filtros opcionales
  async findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PersonalWhereUniqueInput;
    where?: Prisma.PersonalWhereInput;
    orderBy?: Prisma.PersonalOrderByWithRelationInput;
  }): Promise<Personal[]> {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prisma.personal.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  // Crear un nuevo usuario
  async create(data: CreatePersonalDto): Promise<Personal> {
    return this.prisma.personal.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        documentType: data.documentType,
        documentNumber: data.documentNumber,
        profile: data.profile,
        scrumMaster: data.scrumMaster,
        technicalLead: data.technicalLead,
        squad: data.squad,
        phone: data.phone,
        birthDate: new Date(data.birthDate),
        department: data.department,
        province: data.province,
        district: data.district,
        address: data.address,
      },
    });
  }

  async createUsersBulk(data: CreatePersonalDto[]): Promise<void> {
    const existingUsers = await this.prisma.personal.findMany({
      where: {
        documentNumber: { in: data.map((user) => user.documentNumber) },
      },
    });

    const existingDocumentNumbers = existingUsers.map(
      (user) => user.documentNumber,
    );
    const duplicates = data.filter((user) =>
      existingDocumentNumbers.includes(user.documentNumber),
    );

    if (duplicates.length > 0) {
      throw new BadRequestException({
        message: 'Some users already exist.',
        duplicates,
      });
    }

    await this.prisma.personal.createMany({
      data: data.map((item) => ({
        ...item,
        birthDate: new Date(item.birthDate),
      })),
    });
  }

  // Actualizar usuario
  async update(params: {
    where: Prisma.PersonalWhereUniqueInput;
    data: Partial<CreatePersonalDto>;
  }): Promise<Personal> {
    const { where, data } = params;
    return this.prisma.personal.update({
      where,
      data: {
        ...data,
        birthDate: data.birthDate ? new Date(data.birthDate) : undefined,
      },
    });
  }

  // Eliminar usuario
  async delete(where: Prisma.PersonalWhereUniqueInput): Promise<Personal> {
    return this.prisma.personal.delete({
      where,
    });
  }
}
