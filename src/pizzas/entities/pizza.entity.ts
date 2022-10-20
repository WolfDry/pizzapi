import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

export enum PizzaFlavor{
    TOMATOES = 'tomatoes',
    CHEESE = 'cheese',
    OLIVE = 'olive'
}

@Entity()
export class Pizza {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        length: 100,
        unique: true
    })
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
