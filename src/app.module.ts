import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { CategoryModule } from './category/category.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Category } from './category/category.entity'

@Module({
  imports: [
    // Conectar com o Postgres
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgres://postgres:superpostgres@localhost:5432/dreamcake',
      autoLoadEntities: true,
      synchronize: true,
      // entities: [Category],
      logging: true
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql'
    }),
    CategoryModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
