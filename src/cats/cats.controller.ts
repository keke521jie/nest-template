import {
  Controller,
  Get,
  UseFilters,
  Param,
  Post,
  Body,
  Delete,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from 'src/filter/http-exception.filter';
import { Cat } from './entities/cat.entity';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
@UseFilters(new HttpExceptionFilter())
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return await this.catsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Cat | null> {
    return await this.catsService.findOne(id);
  }

  @Delete('/remove/:id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.catsService.remove(id);
  }

  @Post()
  async create(@Body() cat: CreateCatDto): Promise<Cat> {
    return await this.catsService.create(cat);
  }
}
