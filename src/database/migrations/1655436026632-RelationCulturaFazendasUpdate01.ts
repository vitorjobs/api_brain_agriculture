import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationCulturaFazendasUpdate011655436026632 implements MigrationInterface {
    name = 'RelationCulturaFazendasUpdate011655436026632'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_fazenda" ("id" uuid PRIMARY KEY NOT NULL, "nome" varchar NOT NULL, "endereco_id" uuid NOT NULL, "produtor_id" uuid NOT NULL, "cultura_id" uuid NOT NULL, "a_tot_hect" number NOT NULL, "a_agric_hect" number NOT NULL, "a_vege_hect" number NOT NULL, "created_at" timestamp NOT NULL DEFAULT (now()), "updated_at" timestamp NOT NULL DEFAULT (now()), CONSTRAINT "FK_7b70274d1e15b4c3d87f679cfdf" FOREIGN KEY ("produtor_id") REFERENCES "produtor" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_fd435020b27bb19780c8ad25d65" FOREIGN KEY ("endereco_id") REFERENCES "endereco" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_fazenda"("id", "nome", "endereco_id", "produtor_id", "cultura_id", "a_tot_hect", "a_agric_hect", "a_vege_hect", "created_at", "updated_at") SELECT "id", "nome", "endereco_id", "produtor_id", "cultura_id", "a_tot_hect", "a_agric_hect", "a_vege_hect", "created_at", "updated_at" FROM "fazenda"`);
        await queryRunner.query(`DROP TABLE "fazenda"`);
        await queryRunner.query(`ALTER TABLE "temporary_fazenda" RENAME TO "fazenda"`);
        await queryRunner.query(`CREATE TABLE "temporary_fazenda" ("id" uuid PRIMARY KEY NOT NULL, "nome" varchar NOT NULL, "endereco_id" uuid NOT NULL, "produtor_id" uuid NOT NULL, "a_tot_hect" number NOT NULL, "a_agric_hect" number NOT NULL, "a_vege_hect" number NOT NULL, "created_at" timestamp NOT NULL DEFAULT (now()), "updated_at" timestamp NOT NULL DEFAULT (now()), CONSTRAINT "FK_7b70274d1e15b4c3d87f679cfdf" FOREIGN KEY ("produtor_id") REFERENCES "produtor" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_fd435020b27bb19780c8ad25d65" FOREIGN KEY ("endereco_id") REFERENCES "endereco" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_fazenda"("id", "nome", "endereco_id", "produtor_id", "a_tot_hect", "a_agric_hect", "a_vege_hect", "created_at", "updated_at") SELECT "id", "nome", "endereco_id", "produtor_id", "a_tot_hect", "a_agric_hect", "a_vege_hect", "created_at", "updated_at" FROM "fazenda"`);
        await queryRunner.query(`DROP TABLE "fazenda"`);
        await queryRunner.query(`ALTER TABLE "temporary_fazenda" RENAME TO "fazenda"`);
        await queryRunner.query(`CREATE TABLE "temporary_fazenda" ("id" uuid PRIMARY KEY NOT NULL, "nome" varchar NOT NULL, "endereco_id" uuid NOT NULL, "produtor_id" uuid NOT NULL, "a_tot_hect" number NOT NULL, "a_agric_hect" number NOT NULL, "a_vege_hect" number NOT NULL, "created_at" timestamp NOT NULL DEFAULT (now()), "updated_at" timestamp NOT NULL DEFAULT (now()), "culturaIdId" varchar, CONSTRAINT "FK_7b70274d1e15b4c3d87f679cfdf" FOREIGN KEY ("produtor_id") REFERENCES "produtor" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_fd435020b27bb19780c8ad25d65" FOREIGN KEY ("endereco_id") REFERENCES "endereco" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_fazenda"("id", "nome", "endereco_id", "produtor_id", "a_tot_hect", "a_agric_hect", "a_vege_hect", "created_at", "updated_at") SELECT "id", "nome", "endereco_id", "produtor_id", "a_tot_hect", "a_agric_hect", "a_vege_hect", "created_at", "updated_at" FROM "fazenda"`);
        await queryRunner.query(`DROP TABLE "fazenda"`);
        await queryRunner.query(`ALTER TABLE "temporary_fazenda" RENAME TO "fazenda"`);
        await queryRunner.query(`CREATE TABLE "temporary_fazenda" ("id" uuid PRIMARY KEY NOT NULL, "nome" varchar NOT NULL, "endereco_id" uuid NOT NULL, "produtor_id" uuid NOT NULL, "a_tot_hect" number NOT NULL, "a_agric_hect" number NOT NULL, "a_vege_hect" number NOT NULL, "created_at" timestamp NOT NULL DEFAULT (now()), "updated_at" timestamp NOT NULL DEFAULT (now()), "culturaIdId" varchar)`);
        await queryRunner.query(`INSERT INTO "temporary_fazenda"("id", "nome", "endereco_id", "produtor_id", "a_tot_hect", "a_agric_hect", "a_vege_hect", "created_at", "updated_at", "culturaIdId") SELECT "id", "nome", "endereco_id", "produtor_id", "a_tot_hect", "a_agric_hect", "a_vege_hect", "created_at", "updated_at", "culturaIdId" FROM "fazenda"`);
        await queryRunner.query(`DROP TABLE "fazenda"`);
        await queryRunner.query(`ALTER TABLE "temporary_fazenda" RENAME TO "fazenda"`);
        await queryRunner.query(`CREATE TABLE "temporary_endereco" ("id" varchar PRIMARY KEY NOT NULL, "cidade" varchar NOT NULL, "estado" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`INSERT INTO "temporary_endereco"("id", "cidade", "estado", "created_at", "updated_at") SELECT "id", "cidade", "estado", "created_at", "updated_at" FROM "endereco"`);
        await queryRunner.query(`DROP TABLE "endereco"`);
        await queryRunner.query(`ALTER TABLE "temporary_endereco" RENAME TO "endereco"`);
        await queryRunner.query(`CREATE TABLE "temporary_produtor" ("id" varchar PRIMARY KEY NOT NULL, "nome" varchar NOT NULL, "cpf_cnpj" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), CONSTRAINT "UQ_9adf702cf9d6cb1daa7576917e3" UNIQUE ("cpf_cnpj"))`);
        await queryRunner.query(`INSERT INTO "temporary_produtor"("id", "nome", "cpf_cnpj", "created_at", "updated_at") SELECT "id", "nome", "cpf_cnpj", "created_at", "updated_at" FROM "produtor"`);
        await queryRunner.query(`DROP TABLE "produtor"`);
        await queryRunner.query(`ALTER TABLE "temporary_produtor" RENAME TO "produtor"`);
        await queryRunner.query(`CREATE TABLE "temporary_fazenda" ("id" varchar PRIMARY KEY NOT NULL, "nome" varchar NOT NULL, "endereco_id" varchar NOT NULL, "produtor_id" varchar NOT NULL, "a_tot_hect" integer NOT NULL, "a_agric_hect" integer NOT NULL, "a_vege_hect" integer NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "culturaIdId" varchar)`);
        await queryRunner.query(`INSERT INTO "temporary_fazenda"("id", "nome", "endereco_id", "produtor_id", "a_tot_hect", "a_agric_hect", "a_vege_hect", "created_at", "updated_at", "culturaIdId") SELECT "id", "nome", "endereco_id", "produtor_id", "a_tot_hect", "a_agric_hect", "a_vege_hect", "created_at", "updated_at", "culturaIdId" FROM "fazenda"`);
        await queryRunner.query(`DROP TABLE "fazenda"`);
        await queryRunner.query(`ALTER TABLE "temporary_fazenda" RENAME TO "fazenda"`);
        await queryRunner.query(`CREATE TABLE "temporary_cultura" ("id" varchar PRIMARY KEY NOT NULL, "nome" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`INSERT INTO "temporary_cultura"("id", "nome", "created_at", "updated_at") SELECT "id", "nome", "created_at", "updated_at" FROM "cultura"`);
        await queryRunner.query(`DROP TABLE "cultura"`);
        await queryRunner.query(`ALTER TABLE "temporary_cultura" RENAME TO "cultura"`);
        await queryRunner.query(`CREATE TABLE "temporary_usuario" ("id" varchar PRIMARY KEY NOT NULL, "nome" varchar NOT NULL, "email" varchar NOT NULL, "senha" varchar NOT NULL, "admin" boolean NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), CONSTRAINT "UQ_2863682842e688ca198eb25c124" UNIQUE ("email"))`);
        await queryRunner.query(`INSERT INTO "temporary_usuario"("id", "nome", "email", "senha", "admin", "created_at", "updated_at") SELECT "id", "nome", "email", "senha", "admin", "created_at", "updated_at" FROM "usuario"`);
        await queryRunner.query(`DROP TABLE "usuario"`);
        await queryRunner.query(`ALTER TABLE "temporary_usuario" RENAME TO "usuario"`);
        await queryRunner.query(`CREATE TABLE "temporary_fazenda" ("id" varchar PRIMARY KEY NOT NULL, "nome" varchar NOT NULL, "endereco_id" varchar NOT NULL, "produtor_id" varchar NOT NULL, "a_tot_hect" integer NOT NULL, "a_agric_hect" integer NOT NULL, "a_vege_hect" integer NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "culturaIdId" varchar, CONSTRAINT "FK_fd435020b27bb19780c8ad25d65" FOREIGN KEY ("endereco_id") REFERENCES "endereco" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_7b70274d1e15b4c3d87f679cfdf" FOREIGN KEY ("produtor_id") REFERENCES "produtor" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_c5619c9e0b649dc4cc297b6d757" FOREIGN KEY ("culturaIdId") REFERENCES "cultura" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_fazenda"("id", "nome", "endereco_id", "produtor_id", "a_tot_hect", "a_agric_hect", "a_vege_hect", "created_at", "updated_at", "culturaIdId") SELECT "id", "nome", "endereco_id", "produtor_id", "a_tot_hect", "a_agric_hect", "a_vege_hect", "created_at", "updated_at", "culturaIdId" FROM "fazenda"`);
        await queryRunner.query(`DROP TABLE "fazenda"`);
        await queryRunner.query(`ALTER TABLE "temporary_fazenda" RENAME TO "fazenda"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "fazenda" RENAME TO "temporary_fazenda"`);
        await queryRunner.query(`CREATE TABLE "fazenda" ("id" varchar PRIMARY KEY NOT NULL, "nome" varchar NOT NULL, "endereco_id" varchar NOT NULL, "produtor_id" varchar NOT NULL, "a_tot_hect" integer NOT NULL, "a_agric_hect" integer NOT NULL, "a_vege_hect" integer NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "culturaIdId" varchar)`);
        await queryRunner.query(`INSERT INTO "fazenda"("id", "nome", "endereco_id", "produtor_id", "a_tot_hect", "a_agric_hect", "a_vege_hect", "created_at", "updated_at", "culturaIdId") SELECT "id", "nome", "endereco_id", "produtor_id", "a_tot_hect", "a_agric_hect", "a_vege_hect", "created_at", "updated_at", "culturaIdId" FROM "temporary_fazenda"`);
        await queryRunner.query(`DROP TABLE "temporary_fazenda"`);
        await queryRunner.query(`ALTER TABLE "usuario" RENAME TO "temporary_usuario"`);
        await queryRunner.query(`CREATE TABLE "usuario" ("id" uuid PRIMARY KEY NOT NULL, "nome" varchar NOT NULL, "email" varchar NOT NULL, "senha" varchar NOT NULL, "admin" boolean NOT NULL DEFAULT (false), "created_at" timestamp NOT NULL DEFAULT (now()), "updated_at" timestamp NOT NULL DEFAULT (now()), CONSTRAINT "UQ_2863682842e688ca198eb25c124" UNIQUE ("email"))`);
        await queryRunner.query(`INSERT INTO "usuario"("id", "nome", "email", "senha", "admin", "created_at", "updated_at") SELECT "id", "nome", "email", "senha", "admin", "created_at", "updated_at" FROM "temporary_usuario"`);
        await queryRunner.query(`DROP TABLE "temporary_usuario"`);
        await queryRunner.query(`ALTER TABLE "cultura" RENAME TO "temporary_cultura"`);
        await queryRunner.query(`CREATE TABLE "cultura" ("id" uuid PRIMARY KEY NOT NULL, "nome" varchar NOT NULL, "created_at" timestamp NOT NULL DEFAULT (now()), "updated_at" timestamp NOT NULL DEFAULT (now()))`);
        await queryRunner.query(`INSERT INTO "cultura"("id", "nome", "created_at", "updated_at") SELECT "id", "nome", "created_at", "updated_at" FROM "temporary_cultura"`);
        await queryRunner.query(`DROP TABLE "temporary_cultura"`);
        await queryRunner.query(`ALTER TABLE "fazenda" RENAME TO "temporary_fazenda"`);
        await queryRunner.query(`CREATE TABLE "fazenda" ("id" uuid PRIMARY KEY NOT NULL, "nome" varchar NOT NULL, "endereco_id" uuid NOT NULL, "produtor_id" uuid NOT NULL, "a_tot_hect" number NOT NULL, "a_agric_hect" number NOT NULL, "a_vege_hect" number NOT NULL, "created_at" timestamp NOT NULL DEFAULT (now()), "updated_at" timestamp NOT NULL DEFAULT (now()), "culturaIdId" varchar)`);
        await queryRunner.query(`INSERT INTO "fazenda"("id", "nome", "endereco_id", "produtor_id", "a_tot_hect", "a_agric_hect", "a_vege_hect", "created_at", "updated_at", "culturaIdId") SELECT "id", "nome", "endereco_id", "produtor_id", "a_tot_hect", "a_agric_hect", "a_vege_hect", "created_at", "updated_at", "culturaIdId" FROM "temporary_fazenda"`);
        await queryRunner.query(`DROP TABLE "temporary_fazenda"`);
        await queryRunner.query(`ALTER TABLE "produtor" RENAME TO "temporary_produtor"`);
        await queryRunner.query(`CREATE TABLE "produtor" ("id" uuid PRIMARY KEY NOT NULL, "nome" varchar NOT NULL, "cpf_cnpj" varchar NOT NULL, "created_at" timestamp NOT NULL DEFAULT (now()), "updated_at" timestamp NOT NULL DEFAULT (now()), CONSTRAINT "UQ_9adf702cf9d6cb1daa7576917e3" UNIQUE ("cpf_cnpj"))`);
        await queryRunner.query(`INSERT INTO "produtor"("id", "nome", "cpf_cnpj", "created_at", "updated_at") SELECT "id", "nome", "cpf_cnpj", "created_at", "updated_at" FROM "temporary_produtor"`);
        await queryRunner.query(`DROP TABLE "temporary_produtor"`);
        await queryRunner.query(`ALTER TABLE "endereco" RENAME TO "temporary_endereco"`);
        await queryRunner.query(`CREATE TABLE "endereco" ("id" uuid PRIMARY KEY NOT NULL, "cidade" varchar NOT NULL, "estado" varchar NOT NULL, "created_at" timestamp NOT NULL DEFAULT (now()), "updated_at" timestamp NOT NULL DEFAULT (now()))`);
        await queryRunner.query(`INSERT INTO "endereco"("id", "cidade", "estado", "created_at", "updated_at") SELECT "id", "cidade", "estado", "created_at", "updated_at" FROM "temporary_endereco"`);
        await queryRunner.query(`DROP TABLE "temporary_endereco"`);
        await queryRunner.query(`ALTER TABLE "fazenda" RENAME TO "temporary_fazenda"`);
        await queryRunner.query(`CREATE TABLE "fazenda" ("id" uuid PRIMARY KEY NOT NULL, "nome" varchar NOT NULL, "endereco_id" uuid NOT NULL, "produtor_id" uuid NOT NULL, "a_tot_hect" number NOT NULL, "a_agric_hect" number NOT NULL, "a_vege_hect" number NOT NULL, "created_at" timestamp NOT NULL DEFAULT (now()), "updated_at" timestamp NOT NULL DEFAULT (now()), "culturaIdId" varchar, CONSTRAINT "FK_fd435020b27bb19780c8ad25d65" FOREIGN KEY ("endereco_id") REFERENCES "endereco" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "fazenda"("id", "nome", "endereco_id", "produtor_id", "a_tot_hect", "a_agric_hect", "a_vege_hect", "created_at", "updated_at", "culturaIdId") SELECT "id", "nome", "endereco_id", "produtor_id", "a_tot_hect", "a_agric_hect", "a_vege_hect", "created_at", "updated_at", "culturaIdId" FROM "temporary_fazenda"`);
        await queryRunner.query(`DROP TABLE "temporary_fazenda"`);
        await queryRunner.query(`ALTER TABLE "fazenda" RENAME TO "temporary_fazenda"`);
        await queryRunner.query(`CREATE TABLE "fazenda" ("id" uuid PRIMARY KEY NOT NULL, "nome" varchar NOT NULL, "endereco_id" uuid NOT NULL, "produtor_id" uuid NOT NULL, "a_tot_hect" number NOT NULL, "a_agric_hect" number NOT NULL, "a_vege_hect" number NOT NULL, "created_at" timestamp NOT NULL DEFAULT (now()), "updated_at" timestamp NOT NULL DEFAULT (now()), CONSTRAINT "FK_7b70274d1e15b4c3d87f679cfdf" FOREIGN KEY ("produtor_id") REFERENCES "produtor" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_fd435020b27bb19780c8ad25d65" FOREIGN KEY ("endereco_id") REFERENCES "endereco" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "fazenda"("id", "nome", "endereco_id", "produtor_id", "a_tot_hect", "a_agric_hect", "a_vege_hect", "created_at", "updated_at") SELECT "id", "nome", "endereco_id", "produtor_id", "a_tot_hect", "a_agric_hect", "a_vege_hect", "created_at", "updated_at" FROM "temporary_fazenda"`);
        await queryRunner.query(`DROP TABLE "temporary_fazenda"`);
        await queryRunner.query(`ALTER TABLE "fazenda" RENAME TO "temporary_fazenda"`);
        await queryRunner.query(`CREATE TABLE "fazenda" ("id" uuid PRIMARY KEY NOT NULL, "nome" varchar NOT NULL, "endereco_id" uuid NOT NULL, "produtor_id" uuid NOT NULL, "cultura_id" uuid NOT NULL, "a_tot_hect" number NOT NULL, "a_agric_hect" number NOT NULL, "a_vege_hect" number NOT NULL, "created_at" timestamp NOT NULL DEFAULT (now()), "updated_at" timestamp NOT NULL DEFAULT (now()), CONSTRAINT "FK_7b70274d1e15b4c3d87f679cfdf" FOREIGN KEY ("produtor_id") REFERENCES "produtor" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_fd435020b27bb19780c8ad25d65" FOREIGN KEY ("endereco_id") REFERENCES "endereco" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "fazenda"("id", "nome", "endereco_id", "produtor_id", "a_tot_hect", "a_agric_hect", "a_vege_hect", "created_at", "updated_at") SELECT "id", "nome", "endereco_id", "produtor_id", "a_tot_hect", "a_agric_hect", "a_vege_hect", "created_at", "updated_at" FROM "temporary_fazenda"`);
        await queryRunner.query(`DROP TABLE "temporary_fazenda"`);
        await queryRunner.query(`ALTER TABLE "fazenda" RENAME TO "temporary_fazenda"`);
        await queryRunner.query(`CREATE TABLE "fazenda" ("id" uuid PRIMARY KEY NOT NULL, "nome" varchar NOT NULL, "endereco_id" uuid NOT NULL, "produtor_id" uuid NOT NULL, "cultura_id" uuid NOT NULL, "a_tot_hect" number NOT NULL, "a_agric_hect" number NOT NULL, "a_vege_hect" number NOT NULL, "created_at" timestamp NOT NULL DEFAULT (now()), "updated_at" timestamp NOT NULL DEFAULT (now()), CONSTRAINT "FK_efed50cc464b98bd6aac0b8cfdd" FOREIGN KEY ("cultura_id") REFERENCES "cultura" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_7b70274d1e15b4c3d87f679cfdf" FOREIGN KEY ("produtor_id") REFERENCES "produtor" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_fd435020b27bb19780c8ad25d65" FOREIGN KEY ("endereco_id") REFERENCES "endereco" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "fazenda"("id", "nome", "endereco_id", "produtor_id", "cultura_id", "a_tot_hect", "a_agric_hect", "a_vege_hect", "created_at", "updated_at") SELECT "id", "nome", "endereco_id", "produtor_id", "cultura_id", "a_tot_hect", "a_agric_hect", "a_vege_hect", "created_at", "updated_at" FROM "temporary_fazenda"`);
        await queryRunner.query(`DROP TABLE "temporary_fazenda"`);
    }

}
