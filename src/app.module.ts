import { Module } from '@nestjs/common';
import { ProvinceModule } from './province/province.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { CitiesModule } from './cities/cities.module';

@Module({
  imports: [ProvinceModule, ConfigModule.forRoot({ isGlobal : true }), DatabaseModule, CitiesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
