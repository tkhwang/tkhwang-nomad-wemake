import type { Route } from "~/types";
import type { MetaFunction } from "@remix-run/react";

interface YearlyLeaderboardPageProps extends Route.ComponentProps {}

export function meta(): MetaFunction {
  return [
    { title: "Yearly Leaderboard | Product Hunt Clone" },
    { name: "description", content: "Top products of the year" },
  ];
}

export function loader({ params }: Route.LoaderArgs) {
  const { year } = params;

  return {
    year,
    products: [],
  };
}

export default function YearlyLeaderboardPage({
  loaderData,
}: YearlyLeaderboardPageProps) {
  const { year, products } = loaderData;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Top Products of {year}</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Product leaderboard cards */}
      </div>
    </main>
  );
}
