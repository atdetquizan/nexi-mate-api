import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersService } from './user/user.service';
import { User as UserModel } from 'generated/prisma';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UsersService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('user')
  async signupUser(
    @Body() userData: { name: string; email: string; password: string },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Get('user')
  async getUsers(): Promise<UserModel[]> {
    return this.userService.users({});
  }
}
