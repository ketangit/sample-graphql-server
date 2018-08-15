import { Controller, Mutation, Query } from "vesper";
import { EntityManager, FindManyOptions } from "typeorm";
import { User } from "../entity/User";
import { UsersArgs } from "../args/UsersArgs";
import { UserSaveArgs } from "../args/UserSaveArgs";

@Controller()
export class UserController {
  constructor(private entityManager: EntityManager) {}

  @Query()
  users(args: UsersArgs): Promise<User[]> {
    const findOptions: FindManyOptions = {};
    if (args.limit) {
      findOptions.take = args.limit;
    }
    if (args.offset) {
      findOptions.skip = args.offset;
    }
    return this.entityManager.find(User, findOptions);
  }

  @Query()
  async user({ id }: { id: number }): Promise<User> {
    const userObj = await this.entityManager.findOne(User, id);
    if (userObj !== undefined) {
      return userObj;
    } else {
      return new User();
    }
  }

  @Mutation()
  async userSave(args: UserSaveArgs): Promise<User> {
    const user = await this.entityManager.findOne(User, args.id);
    if (user !== undefined) {
      user.firstName = args.firstName;
      user.lastName = args.lastName;
      return this.entityManager.save(user);
    } else {
      const newUser = new User();
      newUser.firstName = args.firstName;
      newUser.lastName = args.lastName;
      return this.entityManager.save(newUser);
    }
  }

  @Mutation()
  async userDelete({ id }: { id: number }): Promise<boolean> {
    const user = await this.entityManager.findOne(User, id);
    if (user !== undefined) {
      await this.entityManager.remove(user);
      return true;
    } else {
      return false;
    }
  }
}
