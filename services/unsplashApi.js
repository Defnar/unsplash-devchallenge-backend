import axios from "axios";

const unsplashMax = 30;
const unsplashMin = 0;

const unsplashUrl = axios.create({
  baseURL: "https://api.unsplash.com",
  timeout: 5000,
  headers: {
    Authorization: `Client-ID ${process.env.UNSPLASHACCESSKEY}`,
  },
});

/**
 * Fetch images from Unsplash API
 * @param {string} query - Search term for images
 * @param {number} limit - Number of images to fetch (0–30)
 * @param {number} page - Pagination index
 * @param {string} order_by - Sort order (relevant, latest, etc.)
 */
const unsplashSearch = async (query, limit, page, order_by) => {
  const per_page = Math.min(Math.max(unsplashMin, limit), unsplashMax);

  try {
    const response = await unsplashUrl.get("/search/photos", {
      params: {
        query,
        page,
        order_by,
        per_page,
      },
    });

    return response.data;
  } catch (err) {
    console.error("Unsplash API Error: ", err.message);
    return { results: [], total: 0, error: true };
  }
};

/**
 * fetch details on a specific image from unsplash API
 * @param {string} id - unsplash photo id
 */

const unsplashImageDetails = async (id) => {
  try {
    const response = await unsplashUrl.get(`/photos/${id}`);

    return response.data;
  } catch (err) {
    console.error("Unsplash API Error: ", err.message);
    return { error: true };
  }
};

export { unsplashSearch, unsplashImageDetails };
