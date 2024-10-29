import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PROPERTIES_TITLE_FIELD } from "../properties/PropertiesTitle";

export const TransactionsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"TransactionsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
