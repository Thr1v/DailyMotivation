import { SortOrder } from "../../util/SortOrder";

export type ImageOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  imageDescription?: SortOrder;
  imageTitle?: SortOrder;
  imageUploadedDate?: SortOrder;
  imageUrl?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  uploadedDate?: SortOrder;
  url?: SortOrder;
};
