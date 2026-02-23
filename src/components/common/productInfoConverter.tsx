import { Product } from "@/data/products";
import { getPrice } from "../contextProvider/PriceContext";

export const CalculateLatestPrice = (price, product: Product): number => {
  const purityFactor = parseInt(product.purity) / 24;
  const metalCost =
    product.weight * purityFactor * price?.["price"]?.[product.type];
  const makingChargesAmount = (metalCost * product.makingCharges) / 100;
  const basePrice = metalCost + makingChargesAmount;
  return Number((basePrice + makingChargesAmount).toFixed(2));
};
