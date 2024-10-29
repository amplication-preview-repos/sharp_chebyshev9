/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AgentsCreateInput } from "./AgentsCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateAgentsArgs {
  @ApiProperty({
    required: true,
    type: () => AgentsCreateInput,
  })
  @ValidateNested()
  @Type(() => AgentsCreateInput)
  @Field(() => AgentsCreateInput, { nullable: false })
  data!: AgentsCreateInput;
}

export { CreateAgentsArgs as CreateAgentsArgs };
