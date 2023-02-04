import { MigrationInterface, QueryRunner } from 'typeorm';

export class initial1675293720074 implements MigrationInterface {
  name = 'initial1675293720074';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE SEQUENCE "place_id_seq"`);
    await queryRunner.query(
      `CREATE TABLE "place" ("id" INT DEFAULT nextval('"place_id_seq"') NOT NULL, "title" varchar NOT NULL, "description" varchar NOT NULL, "author" varchar, "categories" varchar array NOT NULL, "latitude" decimal NOT NULL, "longitude" decimal NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), CONSTRAINT "PK_96ab91d43aa89c5de1b59ee7cca" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "place"`);
    await queryRunner.query(`DROP SEQUENCE "place_id_seq"`);
  }
}
