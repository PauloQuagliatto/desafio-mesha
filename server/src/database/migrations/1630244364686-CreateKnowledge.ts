import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateKnowledge1630244364686 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Knowledges",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "Git",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "React",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "PHP",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "NodeJS",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "DevOps",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "Databases",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "TypeScript",
                        type: "boolean",
                        default: false
                    },
                    {
                      name: "number_of_skills",
                      type: "number"  
                    }, 
                    {
                        name: "colaborator_knowledge",
                        type: "uuid"
                    }
                ],foreignKeys: [
                    {
                        name: "FKColaboratorKnowledges",
                        referencedTableName: "colaborators",
                        referencedColumnNames: ["id"],
                        columnNames: ["colaborator_knowledge"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("knowledges")
    }

}
