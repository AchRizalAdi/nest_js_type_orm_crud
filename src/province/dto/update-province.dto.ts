import { PickType } from '@nestjs/swagger';
import { ProvinceDto } from './province.dto';

export class UpdateProvinceDto extends PickType(ProvinceDto, [
    'name'
  ] as const) {}