import { Module } from '@nestjs/common';
import { PizzasService } from './pizzas.service';
import { PizzasController } from './pizzas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pizza } from './entities/pizza.entity';
import { Ingredient } from './entities/ingredient.entity';
import { Review } from './entities/review.entity';
import { Story } from './entities/story.entity';
import { Recipe } from './entities/recipe.entity';
import { Calzone } from './entities/calzone.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    Pizza,
    Recipe,
    Calzone,
    Ingredient,
    Review,
    Story
  ])],
  controllers: [PizzasController],
  providers: [PizzasService]
})
export class PizzasModule { }
