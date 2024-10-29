import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { PROPERTIES_TITLE_FIELD } from "../properties/PropertiesTitle";

export const TransactionsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Amount" source="amount" />
        <TextField label="Buyer" source="buyer" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Property"
          source="properties.id"
          reference="Properties"
        >
          <TextField source={PROPERTIES_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Seller" source="seller" />
        <TextField label="Transaction Date" source="transactionDate" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
