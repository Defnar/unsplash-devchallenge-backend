import Collection from "../models/Collection.js";

const getCollections = async (req, res) => {
  const { page = 1 } = req.query;

  const limit = req.query.limit
    ? Math.min(Math.max(req.query.limit, 0), 25)
    : 10;

  try {
    const response = await Collection.find()
      .sort({
        name: "asc",
      })
      .skip((page - 1) * limit)
      .limit(limit);

    const count = await Collection.countDocuments();

    res.json({ total: count, results: response });
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({ error: "Error retrieving collections from database" });
  }
};

const getCollectionById = async (req, res) => {
  const id = req.params["colleciton-id"];

  try {
    const response = await Collection.findById(id);

    res.json(response);
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({ error: "Error retrieving collection from database" });
  }
};

export { getCollections, getCollectionById };
