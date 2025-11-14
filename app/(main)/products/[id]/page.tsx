import ProductDetails from "@/components/products/[id]/ProductDetails";
import { getProductById } from "@/utils/products";

export const dynamic = "force-dynamic";

export const revalidate = 0;

export default async function DetailsPage({
   params,
}: {
   params: Promise<{ id: string }>;
}) {
   const { id } = await params;

   const product = await getProductById(id);

   return <ProductDetails product={product} />;
}
