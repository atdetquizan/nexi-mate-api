import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CreatePersonalDto } from './dto/personal-user.dto';
import { PersonalService } from './personal.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('personal')
export class PersonalController {
  constructor(private readonly usersService: PersonalService) {}

  @Post()
  create(@Body() createUserDto: CreatePersonalDto) {
    return this.usersService.create(createUserDto);
  }

  @Post('bulk')
  createUsersBulk(@Body() createUserDtoArray: CreatePersonalDto[]) {
    return this.usersService.createUsersBulk(createUserDtoArray);
  }

  @Get()
  findAll() {
    return this.usersService.findMany({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne({ id: Number(id) });
  }

  @Patch(':id')
  updateUser(
    @Param('id') id: string,
    @Body() data: Partial<CreatePersonalDto>,
  ) {
    return this.usersService.update({
      where: { id: Number(id) },
      data,
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.usersService.delete({ id: Number(id) });
  }
}
