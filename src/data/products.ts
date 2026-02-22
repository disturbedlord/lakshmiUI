import productNecklace from "@/assets/product-necklace.jpg";
import productBangles from "@/assets/product-bangles.jpg";
import productRing from "@/assets/product-ring.jpg";
import productEarrings from "@/assets/product-earrings.jpg";
import productChain from "@/assets/product-chain.jpg";

export interface Product {
  id: string;
  name: string;
  category: string;
  metalType: string;
  price: number;
  weight: string;
  purity: string;
  image: string;
  occasion: string;
  isNew?: boolean;
  isFeatured?: boolean;
  description: string;
  stoneDetails?: string;
  makingCharges?: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Royal Temple Necklace Set",
    category: "Necklace",
    metalType: "Gold",
    price: 245000,
    weight: "45g",
    purity: "22K",
    image: productNecklace,
    occasion: "Wedding",
    isNew: true,
    isFeatured: true,
    description: "Exquisite 22K gold temple necklace with traditional South Indian craftsmanship, kundan stone setting and matching jhumka earrings.",
    stoneDetails: "Ruby, Emerald, Kundan",
    makingCharges: "12%",
  },
  {
    id: "2",
    name: "Antique Gold Bangles Set",
    category: "Bangles",
    metalType: "Gold",
    price: 128000,
    weight: "32g",
    purity: "22K",
    image: productBangles,
    occasion: "Festival",
    isFeatured: true,
    description: "Set of 4 beautifully crafted antique finish gold bangles with intricate traditional motifs.",
    makingCharges: "10%",
  },
  {
    id: "3",
    name: "Solitaire Diamond Ring",
    category: "Rings",
    metalType: "Diamond",
    price: 185000,
    weight: "5.2g",
    purity: "18K",
    image: productRing,
    occasion: "Engagement",
    isNew: true,
    isFeatured: true,
    description: "Stunning 1.5 carat solitaire diamond set in 18K gold band with VVS1 clarity.",
    stoneDetails: "1.5ct Diamond, VVS1, D Color",
    makingCharges: "8%",
  },
  {
    id: "4",
    name: "Traditional Jhumka Earrings",
    category: "Earrings",
    metalType: "Gold",
    price: 67000,
    weight: "18g",
    purity: "22K",
    image: productEarrings,
    occasion: "Wedding",
    isNew: true,
    description: "Handcrafted gold jhumka earrings with meenakari work and temple design.",
    stoneDetails: "Emerald, Ruby",
    makingCharges: "14%",
  },
  {
    id: "5",
    name: "Silver Anklet Chain",
    category: "Chains",
    metalType: "Silver",
    price: 4500,
    weight: "25g",
    purity: "925 Sterling",
    image: productChain,
    occasion: "Daily Wear",
    description: "Intricately designed sterling silver anklet with traditional ghungroo bells.",
    makingCharges: "15%",
  },
  {
    id: "6",
    name: "Gold Rope Chain",
    category: "Chains",
    metalType: "Gold",
    price: 95000,
    weight: "20g",
    purity: "22K",
    image: productBangles,
    occasion: "Daily Wear",
    isNew: true,
    isFeatured: true,
    description: "Classic 22K gold rope chain, perfect for daily wear with elegant finish.",
    makingCharges: "8%",
  },
];

export const categories = ["Necklace", "Bangles", "Rings", "Earrings", "Chains"];
export const metalTypes = ["Gold", "Silver", "Diamond"];
export const occasions = ["Wedding", "Festival", "Engagement", "Daily Wear", "Gifting"];
