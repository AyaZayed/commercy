import EditProduct from "@/components/dashboard/[id]/EditProduct";
import { getProductById } from "@/utils/products";

export const dynamic = "force-dynamic";

export const revalidate = 0;

export default async function EditProductPage({
   params,
}: {
   params: Promise<{ id: string }>;
}) {
   const { id } = await params;
   const values = await getProductById(id);
   return <EditProduct id={id} values={values} />;
}
