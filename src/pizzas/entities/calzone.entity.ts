import { Entity, PrimaryGeneratedColumn, Column, Index, OneToOne, OneToMany, ManyToMany, JoinTable, ChildEntity } from "typeorm"

import { ApiProperty } from "@nestjs/swagger";
import { Recipe } from "./recipe.entity";

@ChildEntity()
export class Calzone extends Recipe {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id!: number;
}
