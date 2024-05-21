import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const ImageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
