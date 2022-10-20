import { PizzaFlavor } from "../PizzaFlavor";

export class CreatePizzaDto {
    name: string;
    flavor: PizzaFlavor;
    speciality: boolean;
    price: number;
    end?: Date;
}
