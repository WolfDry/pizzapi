import { Module } from '@nestjs/common';
import { ChartService } from './chart.service';
import { ChartController } from './chart.controller';
import { PizzasService } from 'src/pizzas/pizzas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pizza } from 'src/pizzas/entities/pizza.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    Pizza
  ])],
  controllers: [ChartController],
  providers: [ChartService, PizzasService]
})
export class ChartModule { }
