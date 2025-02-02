import type { Route } from "~/types";
import type { MetaFunction } from "@remix-run/react";

interface CategoryPageProps extends Route.ComponentProps {}

export function meta({ params }: Route.MetaFunction): MetaFunction {
  const { category } = params;
  const formattedCategory = category?.replace(/-/g, " ");

  return [
    { title: `${formattedCategory} Products | Product Hunt Clone` },
    { name: "description", content: `Browse ${formattedCategory} products` },
  ];
}

export function loader({ params }: Route.LoaderArgs) {
  const { category } = params;

  return {
    category,
    products: [],
    totalProducts: 0,
  };
}

export default function CategoryPage({ loaderData }: CategoryPageProps) {
  const { category, products, totalProducts } = loaderData;
  const formattedCategory = category.replace(/-/g, " ");

  return (
    <main className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2 capitalize">
          {formattedCategory}
        </h1>
        <p className="text-muted-foreground">{totalProducts} products</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Product cards will go here */}
      </div>
    </main>
  );
}
