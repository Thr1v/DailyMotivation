import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const QuoteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Author" source="author" />
        <TextInput label="Content" multiline source="content" />
        <DateTimeInput label="DateAdded" source="dateAdded" />
        <TextInput label="QuoteAuthor" source="quoteAuthor" />
        <TextInput label="QuoteContent" multiline source="quoteContent" />
        <DateTimeInput label="QuoteDateAdded" source="quoteDateAdded" />
        <TextInput label="Text" multiline source="text" />
      </SimpleForm>
    </Create>
  );
};
