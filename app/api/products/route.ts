import { NextResponse } from "next/server";


const products = {
  latest: [
    { id: 1, name: "Product A", image: "/images/placehold.webp", price: "$10" },
    { id: 2, name: "Product z", image: "/images/placehold1.webp", price: "$15" },
    { id: 3, name: "Product Ccc", image: "/images/placehold2.webp", price: "$20" },
  ],
};
//sdfarrfeerwg
export async function GET() {
  return NextResponse.json(products);
}
