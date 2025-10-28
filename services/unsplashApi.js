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

const getImages = async (query, limit, page, order_by) => {
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

export { getImages };
