import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type QuoteWhereInput = {
  author?: StringNullableFilter;
  content?: StringNullableFilter;
  dateAdded?: DateTimeNullableFilter;
  id?: StringFilter;
  quoteAuthor?: StringNullableFilter;
  quoteContent?: StringNullableFilter;
  quoteDateAdded?: DateTimeNullableFilter;
  text?: StringNullableFilter;
};
