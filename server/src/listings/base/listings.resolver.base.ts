/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { Listings } from "./Listings";
import { ListingsCountArgs } from "./ListingsCountArgs";
import { ListingsFindManyArgs } from "./ListingsFindManyArgs";
import { ListingsFindUniqueArgs } from "./ListingsFindUniqueArgs";
import { DeleteListingsArgs } from "./DeleteListingsArgs";
import { ListingsService } from "../listings.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Listings)
export class ListingsResolverBase {
  constructor(
    protected readonly service: ListingsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Listings",
    action: "read",
    possession: "any",
  })
  async _listingsItemsMeta(
    @graphql.Args() args: ListingsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Listings])
  @nestAccessControl.UseRoles({
    resource: "Listings",
    action: "read",
    possession: "any",
  })
  async listingsItems(
    @graphql.Args() args: ListingsFindManyArgs
  ): Promise<Listings[]> {
    return this.service.listingsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Listings, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Listings",
    action: "read",
    possession: "own",
  })
  async listings(
    @graphql.Args() args: ListingsFindUniqueArgs
  ): Promise<Listings | null> {
    const result = await this.service.listings(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Listings)
  @nestAccessControl.UseRoles({
    resource: "Listings",
    action: "delete",
    possession: "any",
  })
  async deleteListings(
    @graphql.Args() args: DeleteListingsArgs
  ): Promise<Listings | null> {
    try {
      return await this.service.deleteListings(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
