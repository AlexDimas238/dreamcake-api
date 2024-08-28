import { Args, Query, Resolver, Mutation } from '@nestjs/graphql'
import { CategoryPublic } from './dto/category'
import { CategoryService } from './category.service'
import { CategoryCreateInput } from './dto/category-create.input'
import { Category } from './category.entity'
import { identity } from 'rxjs'
import { CategoryMapper } from './category.mapper'

@Resolver(of => CategoryPublic)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}
  @Query(returns => [CategoryPublic], { name: 'getAllCategories' })
  async getAllCategories(): Promise<CategoryPublic[]> {
    return await this.categoryService.findAll()
  }

  @Mutation(returns => CategoryPublic, { name: 'createCategory' })
  async createCategory(
    @Args('input') input: CategoryCreateInput
  ): Promise<CategoryPublic> {
    return this.categoryService.create(CategoryMapper.toEntity(input))
  }
}
