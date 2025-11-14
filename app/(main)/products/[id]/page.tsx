import ProductDetails from "@/components/products/[id]/ProductDetails";
import Product from "@/lib/models/product";
import { connectDB } from "@/lib/mongodb";

import { IProduct } from "@/lib/types/product";

export async function getProductById(id: string): Promise<IProduct> {
   await connectDB();
   const product = await Product.findById(id).lean<IProduct>();
   if (!product) throw new Error("Product not found");
   return product;
}

// metadata generation
export async function generateMetadata({
   params,
}: {
   params: Promise<{ id: string }>;
}) {
   const { id } = await params;
   const product = await getProductById(id);
   return {
      title: product.title,
      description: product.description,
   };
}

export default async function DetailsPage({
   params,
}: {
   params: Promise<{ id: string }>;
}) {
   const { id } = await params;

   const product = await getProductById(id);

   return <ProductDetails product={product} />;
}
