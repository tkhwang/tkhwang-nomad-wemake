import type { Route } from "~/types";
import type { MetaFunction } from "@remix-run/react";

interface LeaderboardPageProps extends Route.ComponentProps {}

export function meta(): MetaFunction {
  return [
    { title: "Leaderboard | Product Hunt Clone" },
    { name: "description", content: "Top products leaderboard" },
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {
    topProducts: [],
  };
}

export default function LeaderboardPage({ loaderData }: LeaderboardPageProps) {
  const { topProducts } = loaderData;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Product Leaderboard</h1>
      {/* Leaderboard content */}
    </main>
  );
}
