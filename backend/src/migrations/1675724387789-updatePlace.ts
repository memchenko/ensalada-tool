import { MigrationInterface, QueryRunner } from 'typeorm';

export class updatePlace1675724387789 implements MigrationInterface {
  name = 'updatePlace1675724387789';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "place" ADD "subCategories" varchar array`,
    );
    await queryRunner.query(`ALTER TABLE "place" ADD "photos" varchar array`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "place" DROP COLUMN "photos"`);
    await queryRunner.query(`ALTER TABLE "place" DROP COLUMN "subCategories"`);
  }
}
