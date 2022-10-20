import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PizzasService } from './pizzas.service';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import { ApiOperation, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger';
import { Pizza } from './entities/pizza.entity';

@Controller('pizzas')
export class PizzasController {
  constructor(private readonly pizzasService: PizzasService) {}

  @ApiOperation({description:"Add a pizza to the menu"})
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: Pizza
  })
  @Post()
  create(@Body() createPizzaDto: CreatePizzaDto) {
    return this.pizzasService.create(createPizzaDto);
  }

  @ApiOperation({description:"List all pizzas in the menu"})
  @ApiOkResponse({
    description: 'All pizzas',
    type: [Pizza]
  })
  @Get()
  findAll() {
    return this.pizzasService.findAll();
  }

  @ApiOperation({description:"Find a pizza in the menu"})
  @ApiNotFoundResponse({description: "The pizza does not exist"})
  @ApiOkResponse({
    description: 'The pizza',
    type: Pizza
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pizzasService.findOne(+id);
  }

  @ApiOperation({description:"Modify a pizza in the menu"})
  @ApiNotFoundResponse({description: "The pizza does not exist"})
  @ApiOkResponse({
    description: 'The patched pizzas',
    type: Pizza
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePizzaDto: UpdatePizzaDto) {
    return this.pizzasService.update(+id, updatePizzaDto);
  }

  @ApiOperation({description:"Remove a pizza in the menu"})
  @ApiNotFoundResponse({description: "The pizza does not exist"})
  @ApiOkResponse({description: "The pizza was removed"})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pizzasService.remove(+id);
  }
}
