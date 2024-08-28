import { Injectable } from '@nestjs/common'
import { Category as CategoryDTO } from './dto/category'
import { InjectRepository } from '@nestjs/typeorm'
import { Category } from './category.entity'
import { Repository } from 'typeorm'

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>
  ) {}
  async findAll(): Promise<CategoryDTO[]> {
    return this.categoryRepository.find()
  }
}
