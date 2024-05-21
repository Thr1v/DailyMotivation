import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ImageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput
          label="ImageDescription"
          multiline
          source="imageDescription"
        />
        <TextInput label="ImageTitle" source="imageTitle" />
        <DateTimeInput label="ImageUploadedDate" source="imageUploadedDate" />
        <TextInput label="ImageURL" source="imageUrl" />
        <TextInput label="Title" source="title" />
        <DateTimeInput label="UploadedDate" source="uploadedDate" />
        <TextInput label="URL" source="url" />
      </SimpleForm>
    </Create>
  );
};
