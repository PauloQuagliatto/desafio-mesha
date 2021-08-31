import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateColaborators1630241685366 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "colaborators",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar(100)"
                    },
                    {
                        name: "email",
                        type: "varchar(100)"
                    },
                    {
                        name: "cpf",
                        type: "varchar(14)"
                    },
                    {
                        name: "phone",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "is_validated",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "git",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "react",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "php",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "nodejs",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "devops",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "databases",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "typescript",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "number_of_skills",
                        type: "int"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("colaborators")
    }

}
