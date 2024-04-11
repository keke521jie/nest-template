import { Injectable } from '@nestjs/common';
import { Cat } from './entities/cat.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  constructor(@InjectRepository(Cat) private catsRepository: Repository<Cat>) {}

  findAll(): Promise<Cat[]> {
    return this.catsRepository.find();
  }

  findOne(id: number): Promise<Cat | null> {
    return this.catsRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    const a = await this.catsRepository.delete(id);
    console.log(a);
  }

  async create(cat: CreateCatDto): Promise<Cat> {
    const newCat = this.catsRepository.create(cat);
    return this.catsRepository.save(newCat);
  }
}
