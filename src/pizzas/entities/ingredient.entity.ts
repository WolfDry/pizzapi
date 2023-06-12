import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm"

import { ApiProperty } from "@nestjs/swagger";
import { Recipe } from "./recipe.entity";

@Entity()
export class Ingredient {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id!: number;

    @ApiProperty()
    @Column()
    name!: string

    @ManyToMany(() => Recipe)
    pizzas: Recipe[]
}
