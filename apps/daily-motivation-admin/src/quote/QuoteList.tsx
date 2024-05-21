import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const QuoteList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Quotes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
