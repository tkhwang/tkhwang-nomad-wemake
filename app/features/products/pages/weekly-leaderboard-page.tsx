import type { Route } from "~/types";
import type { MetaFunction } from "@remix-run/react";

interface WeeklyLeaderboardPageProps extends Route.ComponentProps {}

export function meta(): MetaFunction {
  return [
    { title: "Weekly Leaderboard | Product Hunt Clone" },
    { name: "description", content: "Top products of the week" },
  ];
}

export function loader({ params }: Route.LoaderArgs) {
  const { year, week } = params;

  return {
    year,
    week,
    products: [],
  };
}

export default function WeeklyLeaderboardPage({
  loaderData,
}: WeeklyLeaderboardPageProps) {
  const { year, week, products } = loaderData;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Top Products of Week {week}, {year}
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Product leaderboard cards */}
      </div>
    </main>
  );
}
