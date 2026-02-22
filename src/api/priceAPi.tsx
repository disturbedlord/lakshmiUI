import { api } from "./common";

export const getlatestPriceData = async () => {
  const BASEURL = import.meta.env.VITE_API_URL;
  const latestPriceApiURL = BASEURL + `/api/getLatestPrice`;
  const result = await api.get(latestPriceApiURL);

  return result;
};
