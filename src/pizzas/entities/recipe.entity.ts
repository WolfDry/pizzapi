import { Entity, PrimaryGeneratedColumn, Column, Index, OneToOne, OneToMany, ManyToMany, TableInheritance } from "typeorm"

import { Story } from "./story.entity";
import { ApiProperty } from "@nestjs/swagger";
import { Review } from "./review.entity";
import { Ingredient } from "./ingredient.entity";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Recipe {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id!: number;

    @OneToOne(() => Story, story => story.pizza)
    story: Story

    @OneToMany(() => Review, review => review.pizza)
    reviews: Review[]

    @ApiProperty()
    @ManyToMany(() => Ingredient)
    ingredients: Ingredient[]

    @Index({ unique: true })
    @Column({ length: 100 })
    name!: string;

    @Column({ type: 'timestamp', default: () => 'current_timestamp' })
    created!: Date;

    @Column({ default: false })
    speciality!: boolean;

    @Column()
    price!: number;

    @Column({ nullable: true })
    end?: Date;
}
