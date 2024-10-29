import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ListingsModuleBase } from "./base/listings.module.base";
import { ListingsService } from "./listings.service";
import { ListingsController } from "./listings.controller";
import { ListingsResolver } from "./listings.resolver";

@Module({
  imports: [ListingsModuleBase, forwardRef(() => AuthModule)],
  controllers: [ListingsController],
  providers: [ListingsService, ListingsResolver],
  exports: [ListingsService],
})
export class ListingsModule {}
