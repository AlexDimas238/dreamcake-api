import { Module } from '@nestjs/common'
import { CategoryResolver } from './category.resolver'
import { CategoryService } from './category.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Category } from './category.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  providers: [CategoryService, CategoryResolver]
})
export class CategoryModule {}
