import ProductDetails from "@/components/products/[id]/ProductDetails";
import { getProductById } from "@/utils/products";

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
