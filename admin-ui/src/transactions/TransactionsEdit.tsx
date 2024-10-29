import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { PropertiesTitle } from "../properties/PropertiesTitle";

export const TransactionsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
