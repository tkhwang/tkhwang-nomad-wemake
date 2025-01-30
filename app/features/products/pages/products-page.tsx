import type { Route } from "~/types";
import type { MetaFunction } from "@remix-run/react";

interface ProductsPageProps extends Route.ComponentProps {}

export function meta(): MetaFunction {
  return [
    { title: "Products | Product Hunt Clone" },
    { name: "description", content: "Browse all products" },
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {
    products: [],
  };
}

export function action({}: Route.ActionArgs) {
  return {};
}

export default function ProductsPage({ loaderData }: ProductsPageProps) {
  const { products } = loaderData;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Product cards will go here */}
      </div>
    </main>
  );
}
