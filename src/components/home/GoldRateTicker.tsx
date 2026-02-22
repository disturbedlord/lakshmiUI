import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";
import { useEffect, useState } from "react";
import { getlatestPriceData } from "../../api/priceAPi";
import { Loader } from "../common/reusableComponents";
const metalNameConversion = {
  gold24kPrice: "Gold 24K",
  gold22kPrice: "Gold 22K",
  gold18kPrice: "Gold 18K",
  silver: "Silver",
  diamond: "Diamond",
  platinum: "Platinum",
};

const GoldRateTicker = () => {
  const [priceTickerLoading, setPriceTickerLoading] = useState(true);
  const [priceTickerData, setPriceTickerData] = useState(undefined);
  const fetchLatestPrice = async () => {
    setPriceTickerLoading(true);
    const result = await getlatestPriceData();
    console.log(result);
    if (result) {
      setPriceTickerData(result);
    }
    setPriceTickerLoading(false);
  };

  useEffect(() => {
    fetchLatestPrice();
    // console.log(priceTickerData);
  }, []);

  return (
    <section className="py-4 maroon-gradient border-y border-primary/20 overflow-hidden">
      <div>
        {priceTickerLoading ? (
          <Loader />
        ) : (
          <div className="flex animate-ticker whitespace-nowrap">
            {[
              ...Object.entries(priceTickerData["price"]),
              ...Object.entries(priceTickerData["price"]),
              ...Object.entries(priceTickerData["price"]),
            ].map(([key, value]) => (
              <PriceTickerItem price={value} name={key} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GoldRateTicker;

function PriceTickerItem({ price, name }) {
  return (
    <div key={name} className="inline-flex items-center gap-6 mx-8">
      <span className=" text-xl font-bold text-primary">
        {metalNameConversion[name]}
      </span>
      <span className="text-xl text-foreground">{`₹${Number(price).toLocaleString()}/g`}</span>
    </div>
  );
}
