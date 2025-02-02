import type { Route } from "~/types";
import type { MetaFunction } from "@remix-run/react";

interface DailyLeaderboardPageProps extends Route.ComponentProps {}

export function meta(): MetaFunction {
  return [
    { title: "Daily Leaderboard | Product Hunt Clone" },
    { name: "description", content: "Top products of the day" },
  ];
}

export function loader({ params }: Route.LoaderArgs) {
  const { year, month, day } = params;

  return {
    year,
    month,
    day,
    products: [],
  };
}

export default function DailyLeaderboardPage({
  loaderData,
}: DailyLeaderboardPageProps) {
  const { year, month, day, products } = loaderData;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Top Products of {month}/{day}/{year}
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Product leaderboard cards */}
      </div>
    </main>
  );
}
