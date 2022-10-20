import { Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm"

import { PizzaFlavor } from "../PizzaFlavor";

@Entity()
export class Pizza {
    @PrimaryGeneratedColumn()
    id!: number;
    
    @Index({unique: true})
    @Column({length: 100})
    name!: string;

    @Column({type: 'enum', enum: PizzaFlavor})
    flavor!: PizzaFlavor;

    @Column({type: 'timestamp', default: () => 'current_timestamp'})
    created!: Date;

    @Column({default: false})
    speciality!: boolean;

    @Column()
    price!: number;

    @Column({nullable: true})
    end?: Date;
}
