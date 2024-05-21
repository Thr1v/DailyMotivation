import { Image as TImage } from "../api/image/Image";

export const IMAGE_TITLE_FIELD = "imageTitle";

export const ImageTitle = (record: TImage): string => {
  return record.imageTitle?.toString() || String(record.id);
};
