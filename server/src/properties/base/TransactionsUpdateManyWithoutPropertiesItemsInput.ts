/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TransactionsWhereUniqueInput } from "../../transactions/base/TransactionsWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TransactionsUpdateManyWithoutPropertiesItemsInput {
  @Field(() => [TransactionsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TransactionsWhereUniqueInput],
  })
  connect?: Array<TransactionsWhereUniqueInput>;

  @Field(() => [TransactionsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TransactionsWhereUniqueInput],
  })
  disconnect?: Array<TransactionsWhereUniqueInput>;

  @Field(() => [TransactionsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TransactionsWhereUniqueInput],
  })
  set?: Array<TransactionsWhereUniqueInput>;
}

export { TransactionsUpdateManyWithoutPropertiesItemsInput as TransactionsUpdateManyWithoutPropertiesItemsInput };