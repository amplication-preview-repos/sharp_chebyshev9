import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PROPERTIES_TITLE_FIELD } from "./PropertiesTitle";

export const PropertiesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <TextField label="Image Gallery" source="imageGallery" />
        <TextField label="Number of Bathrooms" source="numberOfBathrooms" />
        <TextField label="Number of Bedrooms" source="numberOfBedrooms" />
        <TextField label="Price" source="price" />
        <TextField label="Size" source="size" />
        <TextField label="Type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Video" source="video" />
        <ReferenceManyField
          reference="Transactions"
          target="propertyId"
          label="TransactionsItems"
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
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
