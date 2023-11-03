import { ApiProperty } from '@nestjs/swagger';

export class ProvinceDto {

  @ApiProperty()
  id: number;
  
  @ApiProperty()
  name: string;
}