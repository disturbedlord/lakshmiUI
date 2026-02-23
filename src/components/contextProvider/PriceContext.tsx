import { getlatestPriceData } from "@/api/priceAPi";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type PriceItem = {
  [metal: string]: number; // dynamic keys like gold, silver, platinum
};

type PriceContextType = {
  prices: PriceItem[];
};

const PriceContext = createContext<PriceContextType | undefined>(undefined);

export const PriceProvider = ({ children }: { children: ReactNode }) => {
  const [priceTickerData, setPriceTickerData] = useState(undefined);
  const fetchLatestPrice = async () => {
    const result = await getlatestPriceData();
    console.log(result);
    if (result) {
      setPriceTickerData(result);
    }
  };

  useEffect(() => {
    fetchLatestPrice();
    // console.log(priceTickerData);
  }, []);

  return (
    <PriceContext.Provider value={priceTickerData}>
      {children}
    </PriceContext.Provider>
  );
};

export function getPrice() {
  return useContext(PriceContext);
}
