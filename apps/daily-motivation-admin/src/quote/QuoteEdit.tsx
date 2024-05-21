import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const QuoteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Author" source="author" />
        <TextInput label="Content" multiline source="content" />
        <DateTimeInput label="DateAdded" source="dateAdded" />
        <TextInput label="QuoteAuthor" source="quoteAuthor" />
        <TextInput label="QuoteContent" multiline source="quoteContent" />
        <DateTimeInput label="QuoteDateAdded" source="quoteDateAdded" />
        <TextInput label="Text" multiline source="text" />
      </SimpleForm>
    </Edit>
  );
};
