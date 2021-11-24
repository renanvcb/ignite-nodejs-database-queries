import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationsOrderGame1637794185234 implements MigrationInterface {
    name = 'RelationsOrderGame1637794185234'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "orders_games_games" ("ordersId" uuid NOT NULL, "gamesId" uuid NOT NULL, CONSTRAINT "PK_1b47aa6827c59190689ebdfcd48" PRIMARY KEY ("ordersId", "gamesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_636a095c03f77ba74310f2037b" ON "orders_games_games" ("ordersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_1b95ce1123f0bb09aa2d759145" ON "orders_games_games" ("gamesId") `);
        await queryRunner.query(`ALTER TABLE "orders_games_games" ADD CONSTRAINT "FK_636a095c03f77ba74310f2037bc" FOREIGN KEY ("ordersId") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders_games_games" ADD CONSTRAINT "FK_1b95ce1123f0bb09aa2d7591457" FOREIGN KEY ("gamesId") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders_games_games" DROP CONSTRAINT "FK_1b95ce1123f0bb09aa2d7591457"`);
        await queryRunner.query(`ALTER TABLE "orders_games_games" DROP CONSTRAINT "FK_636a095c03f77ba74310f2037bc"`);
        await queryRunner.query(`DROP INDEX "IDX_1b95ce1123f0bb09aa2d759145"`);
        await queryRunner.query(`DROP INDEX "IDX_636a095c03f77ba74310f2037b"`);
        await queryRunner.query(`DROP TABLE "orders_games_games"`);
    }

}
