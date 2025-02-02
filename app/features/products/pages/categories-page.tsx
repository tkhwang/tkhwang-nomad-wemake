import type { Route } from "~/types";
import type { MetaFunction } from "@remix-run/react";

interface CategoriesPageProps extends Route.ComponentProps {}

export function meta(): MetaFunction {
  return [
    { title: "Categories | Product Hunt Clone" },
    { name: "description", content: "Browse products by category" },
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {
    categories: [],
  };
}

export default function CategoriesPage({ loaderData }: CategoriesPageProps) {
  const { categories } = loaderData;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Categories</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Category cards will go here */}
      </div>
    </main>
  );
}
