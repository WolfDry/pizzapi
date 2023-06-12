import { Entity, PrimaryGeneratedColumn, Column, Index, OneToOne, JoinColumn } from "typeorm"

import { ApiProperty } from "@nestjs/swagger";
import { Recipe } from "./recipe.entity";

@Entity()
export class Story {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id!: number;

    @OneToOne(() => Recipe)
    @JoinColumn()
    pizza: Recipe

    @ApiProperty()
    @Column({ length: 100 })
    anecdote!: string

    @ApiProperty()
    @Index()
    @Column({ length: 100 })
    city!: string
}
