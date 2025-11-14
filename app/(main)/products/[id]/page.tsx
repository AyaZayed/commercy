import ProductDetails from "@/components/products/[id]/ProductDetails";
import { getProductById } from "@/utils/products";

export default async function DetailsPage({
   params,
}: {
   params: Promise<{ id: string }>;
}) {
   const { id } = await params;

   const product = await getProductById(id);

   return <ProductDetails product={product} />;
}
