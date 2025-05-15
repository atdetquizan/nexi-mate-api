import { Module } from '@nestjs/common';
import { PersonalModule } from './personal';
import { AuthModule } from './auth/auth.module';
import { WhatsappModule } from './whatsapp/whatsapp.module';

@Module({
  imports: [PersonalModule, AuthModule, WhatsappModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
