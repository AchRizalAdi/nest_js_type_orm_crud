import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProvinceService } from './province.service';
import { CreateProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('province')
@Controller({
  path : 'api',
  version : '1'
})
export class ProvinceController {
  constructor(private readonly provinceService: ProvinceService) {}

  @Post('/province')
  async create(@Body() createProvinceDto: CreateProvinceDto) {
    return this.provinceService.create(createProvinceDto);
  }

  @Get('/province')
  async findAll() {
    return this.provinceService.findAll();
  }

  @Get('/province/:id')
  async findOne(@Param('id') id: string) {
    return this.provinceService.findOne(+id);
  }

  @Patch('/province/:id')
  async update(@Param('id') id: string, @Body() updateProvinceDto: UpdateProvinceDto) {
    return this.provinceService.update(+id, updateProvinceDto);
  }

  @Delete('/province/:id')
  async remove(@Param('id') id: string) {
    await this.provinceService.remove(+id);
  }
}
