import type { Route } from "~/types";
import type { MetaFunction } from "@remix-run/react";

interface MonthlyLeaderboardPageProps extends Route.ComponentProps {}

export function meta(): MetaFunction {
  return [
    { title: "Monthly Leaderboard | Product Hunt Clone" },
    { name: "description", content: "Top products of the month" },
  ];
}

export function loader({ params }: Route.LoaderArgs) {
  const { year, month } = params;

  return {
    year,
    month,
    products: [],
  };
}

export default function MonthlyLeaderboardPage({
  loaderData,
}: MonthlyLeaderboardPageProps) {
  const { year, month, products } = loaderData;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Top Products of {month}/{year}
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Product leaderboard cards */}
      </div>
    </main>
  );
}
