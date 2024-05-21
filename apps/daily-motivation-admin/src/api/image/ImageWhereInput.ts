import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ImageWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  imageDescription?: StringNullableFilter;
  imageTitle?: StringNullableFilter;
  imageUploadedDate?: DateTimeNullableFilter;
  imageUrl?: StringNullableFilter;
  title?: StringNullableFilter;
  uploadedDate?: DateTimeNullableFilter;
  url?: StringNullableFilter;
};
