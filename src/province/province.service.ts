import { Injectable } from '@nestjs/common';
import { CreateProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Province } from './entities/province.entity';

@Injectable()
export class ProvinceService {
  constructor(
    @InjectRepository(Province)
    private ProvinceRepository: Repository<Province>,
    private readonly entityManager: EntityManager) {}
  
  async create(createProvinceDto: CreateProvinceDto) {
    const province = new Province(createProvinceDto)
    await this.entityManager.save(province);
  }

  async findAll() {
    return this.ProvinceRepository.find();
  }

  async findOne(id: number) {
    return this.ProvinceRepository.findOneBy({id});
  }

  async update(id: number, updateProvinceDto: UpdateProvinceDto) {
    const province = await this.ProvinceRepository.findOneBy({id});
    province.name = updateProvinceDto.name;
    await this.entityManager.save(province)
    
  }

  async remove(id: number) {
    return this.ProvinceRepository.delete(id);
  }
}
