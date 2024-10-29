import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
} from "react-admin";

import { TransactionsTitle } from "../transactions/TransactionsTitle";

export const PropertiesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <div />
        <div />
        <NumberInput
          step={1}
          label="Number of Bathrooms"
          source="numberOfBathrooms"
        />
        <NumberInput
          step={1}
          label="Number of Bedrooms"
          source="numberOfBedrooms"
        />
        <NumberInput label="Price" source="price" />
        <NumberInput step={1} label="Size" source="size" />
        <ReferenceArrayInput
          source="transactionsItems"
          reference="Transactions"
        >
          <SelectArrayInput
            optionText={TransactionsTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <SelectInput
          source="typeField"
          label="Type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <div />
      </SimpleForm>
    </Create>
  );
};
