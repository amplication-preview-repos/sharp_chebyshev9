import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PropertiesList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"PropertiesItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <TextField label="Video" source="video" />{" "}
      </Datagrid>
    </List>
  );
};
