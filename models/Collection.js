import { model, Schema } from "mongoose";

const CollectionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      minLength: 6,
      maxLength: 20,
    },
    description: String,
    images: [
      {
        id: {
          type: String,
          required: true,
        },
        description: String,
        alt_description: String,
        urls: {
          raw: String,
          full: String,
          regular: String,
          small: String,
          thumb: String,
        },
      },
    ],
    imageCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Collection = model("Collection", CollectionSchema);

export default Collection;
