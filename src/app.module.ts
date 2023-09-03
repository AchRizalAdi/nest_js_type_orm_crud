import { Module } from '@nestjs/common';
import { ProvinceModule } from './province/province.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ProvinceModule, ConfigModule.forRoot({ isGlobal : true }), DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
