import { Module } from '@nestjs/common';

import { PersonalModule } from './personal';
@Module({
  imports: [PersonalModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
