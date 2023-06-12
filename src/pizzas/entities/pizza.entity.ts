import { Entity, PrimaryGeneratedColumn, Column, ChildEntity } from "typeorm"

import { PizzaFlavor } from "../PizzaFlavor";
import { ApiProperty } from "@nestjs/swagger";
import { Recipe } from "./recipe.entity";

@ChildEntity()
export class Pizza extends Recipe {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'enum', enum: PizzaFlavor })
    flavor!: PizzaFlavor;
}
