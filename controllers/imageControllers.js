import { unsplashImageDetails, unsplashSearch } from "../services/unsplashApi.js";

const searchImages = async (req, res) => {
  const { query, limit, page, order_by } = req.query;

  const response = await unsplashSearch(query, limit, page, order_by);

  if (response.error)
    return res
      .status(500)
      .json({ error: "Error retrieving data from unsplash" });

  return res.json(response);
};

const imageDetails = async (req, res) => {
  const { id } = req.params;

  const response = await unsplashImageDetails(id);

  if (response.error)
    return res
      .status(500)
      .json({ error: "Error retrieving data from unsplash" });

  return res.json(response);
};

export { searchImages, imageDetails };
