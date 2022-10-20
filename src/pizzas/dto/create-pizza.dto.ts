import { PizzaFlavor } from "../entities/pizza.entity";

export class CreatePizzaDto {
    name: string;
    flavor: PizzaFlavor;
    speciality: boolean;
    price: number;
    end?: Date;
}
