/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Users as PrismaUsers } from "@prisma/client";

export class UsersServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.UsersCountArgs, "select">): Promise<number> {
    return this.prisma.users.count(args);
  }

  async usersItems(args: Prisma.UsersFindManyArgs): Promise<PrismaUsers[]> {
    return this.prisma.users.findMany(args);
  }
  async users(args: Prisma.UsersFindUniqueArgs): Promise<PrismaUsers | null> {
    return this.prisma.users.findUnique(args);
  }
  async createUsers(args: Prisma.UsersCreateArgs): Promise<PrismaUsers> {
    return this.prisma.users.create(args);
  }
  async updateUsers(args: Prisma.UsersUpdateArgs): Promise<PrismaUsers> {
    return this.prisma.users.update(args);
  }
  async deleteUsers(args: Prisma.UsersDeleteArgs): Promise<PrismaUsers> {
    return this.prisma.users.delete(args);
  }
}