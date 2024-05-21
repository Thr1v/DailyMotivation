import { SortOrder } from "../../util/SortOrder";

export type QuoteOrderByInput = {
  author?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  dateAdded?: SortOrder;
  id?: SortOrder;
  quoteAuthor?: SortOrder;
  quoteContent?: SortOrder;
  quoteDateAdded?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
