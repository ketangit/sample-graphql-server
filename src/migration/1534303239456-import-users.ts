import { MigrationInterface, QueryRunner } from "typeorm";
import { User } from "../entity/User";
import * as faker from "faker";

export class ImportUsers1534303239456 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        {
          firstName: faker.fake("{{name.firstName}}"),
          lastName: faker.fake("{{name.lastName}}")
        },
        {
          firstName: faker.fake("{{name.firstName}}"),
          lastName: faker.fake("{{name.lastName}}")
        },
        {
          firstName: faker.fake("{{name.firstName}}"),
          lastName: faker.fake("{{name.lastName}}")
        },
        {
          firstName: faker.fake("{{name.firstName}}"),
          lastName: faker.fake("{{name.lastName}}")
        },
        {
          firstName: faker.fake("{{name.firstName}}"),
          lastName: faker.fake("{{name.lastName}}")
        },
        {
          firstName: faker.fake("{{name.firstName}}"),
          lastName: faker.fake("{{name.lastName}}")
        },
        {
          firstName: faker.fake("{{name.firstName}}"),
          lastName: faker.fake("{{name.lastName}}")
        },
        {
          firstName: faker.fake("{{name.firstName}}"),
          lastName: faker.fake("{{name.lastName}}")
        },
        {
          firstName: faker.fake("{{name.firstName}}"),
          lastName: faker.fake("{{name.lastName}}")
        },
        {
          firstName: faker.fake("{{name.firstName}}"),
          lastName: faker.fake("{{name.lastName}}")
        },
        {
          firstName: faker.fake("{{name.firstName}}"),
          lastName: faker.fake("{{name.lastName}}")
        },
        {
          firstName: faker.fake("{{name.firstName}}"),
          lastName: faker.fake("{{name.lastName}}")
        },
        {
          firstName: faker.fake("{{name.firstName}}"),
          lastName: faker.fake("{{name.lastName}}")
        },
        {
          firstName: faker.fake("{{name.firstName}}"),
          lastName: faker.fake("{{name.lastName}}")
        },
        {
          firstName: faker.fake("{{name.firstName}}"),
          lastName: faker.fake("{{name.lastName}}")
        },
        {
          firstName: faker.fake("{{name.firstName}}"),
          lastName: faker.fake("{{name.lastName}}")
        },
        {
          firstName: faker.fake("{{name.firstName}}"),
          lastName: faker.fake("{{name.lastName}}")
        },
        {
          firstName: faker.fake("{{name.firstName}}"),
          lastName: faker.fake("{{name.lastName}}")
        }
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    console.log(queryRunner.getDatabases());
    // not used, just to added to avoid errors
  }
}
