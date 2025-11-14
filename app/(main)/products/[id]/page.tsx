import ProductDetails from "@/components/products/[id]/ProductDetails";
import Product from "@/lib/models/product";
import { connectDB } from "@/lib/mongodb";
import { IProduct } from "@/lib/types/product";

type ProductLean = IProduct & { _id: string };

// Generate static params for SSG
export async function generateStaticParams() {
   await connectDB();

   const products: ProductLean[] = await Product.find({}).lean<ProductLean[]>();

   return products.map((p) => ({
      id: p._id.toString(),
   }));
}

// Generate metadata for each product page
export async function generateMetadata({ params }: { params: { id: string } }) {
   await connectDB();

   const product = await Product.findById(params.id).lean<ProductLean>();
   if (!product) {
      return {
         title: "Product not found",
         description: "",
      };
   }

   return {
      title: product.title,
      description: product.description,
   };
}

// Product details page
export default async function DetailsPage({
   params,
}: {
   params: { id: string };
}) {
   await connectDB();

   const product = await Product.findById(params.id).lean<ProductLean>();
   if (!product) {
      return <p>Product not found</p>;
   }

   return <ProductDetails product={product} />;
}
