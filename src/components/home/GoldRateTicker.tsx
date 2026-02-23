import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";
import { useEffect, useState } from "react";
import { getlatestPriceData } from "../../api/priceAPi";
import { Loader } from "../common/reusableComponents";
import { getPrice } from "../contextProvider/PriceContext";
const metalNameConversion = {
  gold24kPrice: "Gold 24K",
  gold22kPrice: "Gold 22K",
  gold18kPrice: "Gold 18K",
  silver: "Silver",
  diamond: "Diamond",
  platinum: "Platinum",
};

function GoldRateTicker() {
  const [priceTickerLoading, setPriceTickerLoading] = useState(true);
  // const [priceTickerData, setPriceTickerData] = useState(undefined);
  const priceTickerData = getPrice();

  // ⚡ Only run this effect when priceTickerData changes
  useEffect(() => {
    if (
      priceTickerData &&
      Object.entries(priceTickerData["price"]).length > 0
    ) {
      setPriceTickerLoading(false);
    }
  }, [priceTickerData]); // dependency ensures effect runs only when data changes

  return (
    <section className="py-4 maroon-gradient border-y border-primary/20 overflow-hidden">
      <div>
        {priceTickerLoading ? (
          <Loader />
        ) : (
          <div className="overflow-hidden w-full">
            <div
              className="inline-flex animate-marquee whitespace-nowrap"
              style={{ animationDuration: `50s` }}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="inline-flex">
                  {Object.entries(priceTickerData["price"]).map(
                    ([key, value]) => (
                      <PriceTickerItem
                        key={`${i}-${key}`}
                        price={value}
                        name={key}
                      />
                    ),
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default GoldRateTicker;

function PriceTickerItem({ price, name }) {
  return (
    <div
      key={name}
      className="inline-flex items-center gap-2 mx-8 drop-shadow-md"
    >
      <span className=" text-xl font-bold text-primary">
        {metalNameConversion[name]}
      </span>{" "}
      <span className="w-1 h-1 bg-gray-300 rounded-xl"></span>
      <span className="text-base text-gray-200 opacity-75 font-semibold text-foreground font-sans">{`₹${Number(price).toLocaleString()}/g`}</span>
    </div>
  );
}
