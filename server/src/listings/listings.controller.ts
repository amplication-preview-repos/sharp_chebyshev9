import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ListingsService } from "./listings.service";
import { ListingsControllerBase } from "./base/listings.controller.base";

@swagger.ApiTags("listings")
@common.Controller("listings")
export class ListingsController extends ListingsControllerBase {
  constructor(
    protected readonly service: ListingsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
