import { PickType } from '@nestjs/swagger';
import { ProvinceDto } from './province.dto';

export class CreateProvinceDto extends PickType(ProvinceDto, [
    'name'
  ] as const) {}