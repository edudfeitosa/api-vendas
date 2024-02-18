import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProducts1708223805472 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
      await queryRunner.createTable(new Table({
        name: 'products',
        columns: [
          {
            name: 'id',
            type: 'uuid', // gera um id único
            isPrimary: true,
            isUnique: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()' // padrão para gerar o id
          },
          {
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'price',
            type: 'decimal',
            precision: 10, // precisão do número
            scale: 2 // casas decimais
          },
          {
            name: 'quantity',
            type: 'int'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()' // data de criação
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()' // data de atualização
          }
        ]
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('products');
    }

}
