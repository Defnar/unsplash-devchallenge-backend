import { model, Schema } from "mongoose";

const CollectionSchema = new Schema({
  name: {
    type: String,
    required: true,
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
      urls: [
        {
          raw: String,
          full: String,
          regular: String,
          small: String,
          thumb: String,
        },
      ],
    },
  ],
});

const Collection = model("Collection", CollectionSchema);

export default Collection;
