import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const QuoteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Author" source="author" />
        <TextField label="Content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="DateAdded" source="dateAdded" />
        <TextField label="ID" source="id" />
        <TextField label="QuoteAuthor" source="quoteAuthor" />
        <TextField label="QuoteContent" source="quoteContent" />
        <TextField label="QuoteDateAdded" source="quoteDateAdded" />
        <TextField label="Text" source="text" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
