import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1685455594205 implements MigrationInterface {
    name = 'Initial1685455594205'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_technic" ADD "brand_1" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product_technic" ADD CONSTRAINT "PK_517bf81a7578c995d0300383432" PRIMARY KEY ("brand_1")`);
        await queryRunner.query(`ALTER TABLE "product_technic" ADD "brand_2" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product_technic" DROP CONSTRAINT "PK_517bf81a7578c995d0300383432"`);
        await queryRunner.query(`ALTER TABLE "product_technic" ADD CONSTRAINT "PK_ab91e9ea52b712dfc6aeb5d3ff2" PRIMARY KEY ("brand_1", "brand_2")`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "technics_id_seq" OWNED BY "technics"."id"`);
        await queryRunner.query(`ALTER TABLE "technics" ALTER COLUMN "id" SET DEFAULT nextval('"technics_id_seq"')`);
        await queryRunner.query(`ALTER TABLE "technics" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "technics" ADD "type" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "technics" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "technics" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "technics" DROP COLUMN "specialization"`);
        await queryRunner.query(`ALTER TABLE "technics" ADD "specialization" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "technics" ALTER COLUMN "brand" SET NOT NULL`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "products_id_seq" OWNED BY "products"."id"`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "id" SET DEFAULT nextval('"products_id_seq"')`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "type" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "quantity" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "brand" SET NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_517bf81a7578c995d030038343" ON "product_technic" ("brand_1") `);
        await queryRunner.query(`CREATE INDEX "IDX_0e3e11cf115158c74c6f431147" ON "product_technic" ("brand_2") `);
        await queryRunner.query(`ALTER TABLE "product_technic" ADD CONSTRAINT "FK_517bf81a7578c995d0300383432" FOREIGN KEY ("brand_1") REFERENCES "technics"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "product_technic" ADD CONSTRAINT "FK_0e3e11cf115158c74c6f4311471" FOREIGN KEY ("brand_2") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_technic" ADD CONSTRAINT "FK_517bf81a7578c995d0300383432" FOREIGN KEY ("brand_1") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "product_technic" ADD CONSTRAINT "FK_0e3e11cf115158c74c6f4311471" FOREIGN KEY ("brand_2") REFERENCES "technics"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_technic" DROP CONSTRAINT "FK_0e3e11cf115158c74c6f4311471"`);
        await queryRunner.query(`ALTER TABLE "product_technic" DROP CONSTRAINT "FK_517bf81a7578c995d0300383432"`);
        await queryRunner.query(`ALTER TABLE "product_technic" DROP CONSTRAINT "FK_0e3e11cf115158c74c6f4311471"`);
        await queryRunner.query(`ALTER TABLE "product_technic" DROP CONSTRAINT "FK_517bf81a7578c995d0300383432"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0e3e11cf115158c74c6f431147"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_517bf81a7578c995d030038343"`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "brand" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "quantity" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "type" text`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "products_id_seq"`);
        await queryRunner.query(`ALTER TABLE "technics" ALTER COLUMN "brand" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "technics" DROP COLUMN "specialization"`);
        await queryRunner.query(`ALTER TABLE "technics" ADD "specialization" text`);
        await queryRunner.query(`ALTER TABLE "technics" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "technics" ADD "name" text`);
        await queryRunner.query(`ALTER TABLE "technics" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "technics" ADD "type" text`);
        await queryRunner.query(`ALTER TABLE "technics" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "technics_id_seq"`);
        await queryRunner.query(`ALTER TABLE "product_technic" DROP CONSTRAINT "PK_ab91e9ea52b712dfc6aeb5d3ff2"`);
        await queryRunner.query(`ALTER TABLE "product_technic" ADD CONSTRAINT "PK_517bf81a7578c995d0300383432" PRIMARY KEY ("brand_1")`);
        await queryRunner.query(`ALTER TABLE "product_technic" DROP COLUMN "brand_2"`);
        await queryRunner.query(`ALTER TABLE "product_technic" DROP CONSTRAINT "PK_517bf81a7578c995d0300383432"`);
        await queryRunner.query(`ALTER TABLE "product_technic" DROP COLUMN "brand_1"`);
    }

}
