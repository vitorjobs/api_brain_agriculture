import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Fazenda1655331692349 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
			new Table({
				name: "fazenda",
				columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "name",
            type: "varchar",
            isUnique: true
          },
          {
            name: "endereco_id",
            type: "uuid",
          },
          {
            name: "produtor_id",
            type: "uuid",
          },
          {
            name: "cultura_id",
            type: "uuid",
          },
          {
            name: "a_tot_hect",
            type: "varchar"
          },
          {
            name: "a_agric_hect",
            type: "varchar"
          },
          {
            name: "a_vege_hect",
            type: "varchar"
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()"
          }
				],

        foreignKeys: [
          {
          name: "fk_endereco_fazenda",
          columnNames: ["endereco_id"],
          referencedTableName: "endereco",
          referencedColumnNames: ["id"] 
          },
          {
          name: "fk_produtor_fazenda",
          columnNames: ["produtor_id"],
          referencedTableName: "produtor",
          referencedColumnNames: ["id"]
          },
          { 
          name: "fk_cultura_fazenda",
          columnNames: ["cultura_id"],
          referencedTableName: "cultura",
          referencedColumnNames: ["id"]
          }
        ]

			})
		) 
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("fazenda")  
  }

}
