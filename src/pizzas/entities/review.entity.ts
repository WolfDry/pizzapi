import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"

import { ApiProperty } from "@nestjs/swagger";
import { Recipe } from "./recipe.entity";

@Entity()
export class Review {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id!: number;

    @ApiProperty()
    @Column({ length: 100 })
    name!: string

    @ManyToOne(() => Recipe, recipe => recipe.reviews)
    pizza: Recipe
}
