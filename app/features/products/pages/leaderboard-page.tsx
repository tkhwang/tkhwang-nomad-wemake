import { Hero } from "~/common/components/hero";
import type { Route } from ".react-router/types/app/features/products/pages/+types/leaderboard-page";

interface LeaderboardPageProps extends Route.ComponentProps {}

export function meta(): Route.MetaFunction {
  return [
    { title: "Leaderboard | Product Hunt Clone" },
    { name: "description", content: "Top products leaderboard" },
  ];
}

export default function LeaderboardPage() {
  return (
    <div>
      <Hero
        title="Leaderboards"
        subtitle="The most popular products of wemake"
      />
    </div>
  );
}
