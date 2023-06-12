import { Pizza } from "src/pizzas/entities/pizza.entity"
import { PizzaFlavor } from "src/pizzas/PizzaFlavor";
import { MigrationInterface, QueryRunner } from "typeorm"

export class migrations1666275879253 implements MigrationInterface {

    public async up(run: QueryRunner): Promise<void> {
        // await run.manager.save(run.manager.create<Pizza>(Pizza,{
        //     name: 'Reine',
        //     flavor: PizzaFlavor.Tomatoes,
        //     price: 13
        // }));
        // await run.manager.save(run.manager.create<Pizza>(Pizza,{
        //     name: '4 formages',
        //     flavor: PizzaFlavor.Crema,
        //     price: 15
        // }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DELETE * from currency')
    }

}
