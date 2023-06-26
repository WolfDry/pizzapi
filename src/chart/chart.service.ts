import { Injectable } from '@nestjs/common';
import { PizzasService } from 'src/pizzas/pizzas.service';

@Injectable()
export class ChartService {
    constructor(private pizzasService: PizzasService) { }
    async getPizzaChartData() {
        const pizzas = await this.pizzasService.findAll()
        const creamPizza = pizzas.filter(pizza => pizza.flavor === 'C')
        const creamPourcentage = (creamPizza.length / pizzas.length) * 100

        const data = [
            {
                name: 'Crème',
                y: creamPourcentage
            },
            {
                name: 'Tomate',
                y: 100 - creamPourcentage
            }
        ]

        return data
    }
}
