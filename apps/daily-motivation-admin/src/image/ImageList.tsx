import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ImageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Images"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="ImageDescription" source="imageDescription" />
        <TextField label="ImageTitle" source="imageTitle" />
        <TextField label="ImageUploadedDate" source="imageUploadedDate" />
        <TextField label="ImageURL" source="imageUrl" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="UploadedDate" source="uploadedDate" />
        <TextField label="URL" source="url" />
      </Datagrid>
    </List>
  );
};
