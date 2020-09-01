import {MigrationInterface, QueryRunner} from "typeorm";

export class SchemaSync1598219486271 implements MigrationInterface {
    name = 'SchemaSync1598219486271'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" RENAME COLUMN "title" TO "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" RENAME COLUMN "name" TO "title"`);
    }

}
