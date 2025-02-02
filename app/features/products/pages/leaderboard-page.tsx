import { Hero } from "~/common/components/hero";
import type { Route } from ".react-router/types/app/features/products/pages/+types/leaderboard-page";
import { Button } from "~/common/components/ui/button";
import { ProductCard } from "~/features/products/components/product-card";
import { Link } from "react-router";

interface LeaderboardPageProps extends Route.ComponentProps {}

export function meta(): Route.MetaFunction {
  return [
    { title: "Leaderboard | wemake" },
    { name: "description", content: "Top products leaderboard" },
  ];
}

export default function LeaderboardPage() {
  return (
    <div className="space-y-20">
      <Hero
        title="Leaderboards"
        subtitle="The most popular products of wemake"
      />

      {/* daily leaderboard */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Daily Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground">
            The most popular products on wemake by day
          </p>
        </div>

        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            id={`productId-${index}`}
            name="Product Name"
            description="Product description"
            commentCount={12}
            viewCount={12}
            votesCount={120}
          />
        ))}
        <Button variant="link" asChild className="text-lg self-center">
          <Link to="/products/leaderboards/daily">
            View all products &rarr;
          </Link>
        </Button>
      </div>

      {/* weekly leaderboard */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Weekly Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground">
            The most popular products on wemake by day
          </p>
        </div>

        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            id={`productId-${index}`}
            name="Product Name"
            description="Product description"
            commentCount={12}
            viewCount={12}
            votesCount={120}
          />
        ))}
        <Button variant="link" asChild className="text-lg self-center">
          <Link to="/products/leaderboards/weekly">
            View all products &rarr;
          </Link>
        </Button>
      </div>

      {/* Monthly leaderboard */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Monthly Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground">
            The most popular products on wemake by day
          </p>
        </div>

        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            id={`productId-${index}`}
            name="Product Name"
            description="Product description"
            commentCount={12}
            viewCount={12}
            votesCount={120}
          />
        ))}
        <Button variant="link" asChild className="text-lg self-center">
          <Link to="/products/leaderboards/monthly">
            View all products &rarr;
          </Link>
        </Button>
      </div>

      {/* Yearly leaderboard */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Yearly Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground">
            The most popular products on wemake by day
          </p>
        </div>

        {Array.from({ length: 7 }).map((_, index) => (
          <ProductCard
            id={`productId-${index}`}
            name="Product Name"
            description="Product description"
            commentCount={12}
            viewCount={12}
            votesCount={120}
          />
        ))}
        <Button variant="link" asChild className="text-lg self-center">
          <Link to="/products/leaderboards/yearly">
            View all products &rarr;
          </Link>
        </Button>
      </div>
    </div>
  );
}
