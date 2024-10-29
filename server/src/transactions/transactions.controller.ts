import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TransactionsService } from "./transactions.service";
import { TransactionsControllerBase } from "./base/transactions.controller.base";

@swagger.ApiTags("transactions")
@common.Controller("transactions")
export class TransactionsController extends TransactionsControllerBase {
  constructor(
    protected readonly service: TransactionsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
