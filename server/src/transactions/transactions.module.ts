import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TransactionsModuleBase } from "./base/transactions.module.base";
import { TransactionsService } from "./transactions.service";
import { TransactionsController } from "./transactions.controller";
import { TransactionsResolver } from "./transactions.resolver";

@Module({
  imports: [TransactionsModuleBase, forwardRef(() => AuthModule)],
  controllers: [TransactionsController],
  providers: [TransactionsService, TransactionsResolver],
  exports: [TransactionsService],
})
export class TransactionsModule {}
