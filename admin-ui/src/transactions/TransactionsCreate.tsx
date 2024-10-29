import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { PropertiesTitle } from "../properties/PropertiesTitle";

export const TransactionsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <TextInput label="Buyer" source="buyer" />
        <ReferenceInput
          source="property.id"
          reference="Properties"
          label="Property"
        >
          <SelectInput optionText={PropertiesTitle} />
        </ReferenceInput>
        <TextInput label="Seller" source="seller" />
        <DateTimeInput label="Transaction Date" source="transactionDate" />
      </SimpleForm>
    </Create>
  );
};
