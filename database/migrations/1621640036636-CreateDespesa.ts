import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateDispesa1621640036636 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "despesa",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "data_da_compra",
                        type: "string",
                    },
                    {
                        name: "local_da_compra",
                        type: "varchar",
                    },
                    {
                        name: "valor",
                        type: "number",
                    },
                    {
                        name: 'responsavel_id',
                        type: 'uuid',
                        isNullable: true
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },

                ],
                foreignKeys: [
                    {
                        name: 'FKresponsavel',
                        referencedTableName: 'responsavel',
                        referencedColumnNames: ['id'],
                        columnNames: ['responsavel_id'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("despesa")
    }
}
