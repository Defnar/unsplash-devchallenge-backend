import { model, Schema } from "mongoose";

const CollectionSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 20
    },
    description: String,
    images: {
        type: [String],
        required: true, 
        default: []
    }
})

const Collection = model("Collection", CollectionSchema);

export default Collection;