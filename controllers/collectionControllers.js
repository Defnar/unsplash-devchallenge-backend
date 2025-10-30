import Collection from "../models/Collection.js";

const getCollections = async (req, res) => {
  const { page = 1 } = req.query;

  const limit = req.query.limit
    ? Math.min(Math.max(parseInt(req.query.limit), 0), 25)
    : 10;

  try {
    const collections = await Collection.find()
      .sort({
        name: "asc",
      })
      .skip((page - 1) * limit)
      .limit(limit);

    const count = await Collection.countDocuments();

    res.json({ total: count, results: collections });
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({ error: "Error retrieving collections from database" });
  }
};

const createNewCollection = async (req, res) => {
  const { name, description } = req.body;

  try {
    const existingCollection = await Collection.findOne({ name: name });

    if (existingCollection)
      return res.status(400).json({ error: "Name already exists" });

    const collection = await Collection.create({
      name,
      description,
    });

    res
      .status(201)
      .json({ message: "Successfully created collection", collection });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Error creating collection" });
  }
};

const getCollectionById = async (req, res) => {
  const id = req.params.collectionId;

  try {
    const collection = await Collection.findById(id);

    if (!collection)
      return res.status(404).json({ error: "No collection found" });

    res.json(collection);
  } catch (err) {
    console.error(err.message);
    res
      .status(500)
      .json({ error: "Error retrieving collection from database" });
  }
};

const addImageToCollection = async (req, res) => {
  const id = req.params.collectionId;

  const { image } = req.body;

  try {
    const collection = await Collection.findById(id);

    if (!collection)
      return res.status(404).json({ error: "No collection found" });

    if (collection.images.some((item) => item.images.id === image.id)) {
      return res
        .status(409)
        .json({ message: "Image already exists in this collection" });
    }

    collection.images.push(image);

    await collection.save();

    res.json({ message: "Image successfully added to collection" });
  } catch (err) {
    console.error(err.message);
    res
      .status(500)
      .json({ error: "Error retrieving collection from database" });
  }
};

const deleteImageFromCollection = async (req, res) => {
  const { collectionId, imageId } = req.params;

  try {
    const collection = await Collection.findById(collectionId);

    if (!collection)
      return res.status(404).json({ error: "Collection not found" });

    collection.images = collection.images.filter((item) => item.id !== imageId);

    await collection.save();

    res.json({ message: "Image successfully removed from collection" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Error deleting collection from database" });
  }
};

const getImageFromCollection = async (req, res) => {
  const { collectionId, imageId } = req.params;

  try {
    const collection = await Collection.findById(collectionId);

    if (!collection)
      return res.status(404).json({ error: "collection not found" });

    const image = collection.images.find((item) => item.id === imageId);

    if (!image)
      return res.status(404).json({ error: "Image not found in collection" });

    res.json(image);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Error retrieving image from collection" });
  }
};

export {
  getCollections,
  getCollectionById,
  addImageToCollection,
  deleteImageFromCollection,
  getImageFromCollection,
  createNewCollection,
};
