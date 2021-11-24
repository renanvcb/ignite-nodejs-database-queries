import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationsGameGenre1637791930057 implements MigrationInterface {
    name = 'RelationsGameGenre1637791930057'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "genres" ADD "gameId" uuid`);
        await queryRunner.query(`ALTER TABLE "genres" ADD CONSTRAINT "FK_eceabcef2d7310667edd0b9c663" FOREIGN KEY ("gameId") REFERENCES "games"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "genres" DROP CONSTRAINT "FK_eceabcef2d7310667edd0b9c663"`);
        await queryRunner.query(`ALTER TABLE "genres" DROP COLUMN "gameId"`);
    }

}
