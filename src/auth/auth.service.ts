import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt.strategy';
import { Personal } from 'generated/prisma';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    documentNumber: string,
    phone: string,
  ): Promise<Personal | null> {
    const user = await this.prisma.personal.findUnique({
      where: { documentNumber },
    });

    if (user && user.phone === phone) {
      return user;
    }

    return null;
  }

  login(user: Personal) {
    const payload = {
      documentNumber: user.documentNumber,
      sub: user.id,
    } as JwtPayload;
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
