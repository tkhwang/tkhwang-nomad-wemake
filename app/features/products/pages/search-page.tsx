import type { Route } from "~/types";
import type { MetaFunction } from "@remix-run/react";

interface SearchPageProps extends Route.ComponentProps {}

export function meta(): MetaFunction {
  return [
    { title: "Search Products | Product Hunt Clone" },
    { name: "description", content: "Search for products" },
  ];
}

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") || "";

  return {
    query,
    results: [],
  };
}

export default function SearchPage({ loaderData }: SearchPageProps) {
  const { query, results } = loaderData;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search Results</h1>
      {/* Search form and results */}
    </main>
  );
}
