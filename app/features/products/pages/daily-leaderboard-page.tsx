import type { Route } from ".react-router/types/app/features/products/pages/+types/daily-leaderboard-page";
import { DateTime } from "luxon";
import { data, isRouteErrorResponse, Link } from "react-router";
import { z } from "zod";
import { Hero } from "~/common/components/hero";
import { Button } from "~/common/components/ui/button";
import { ProductCard } from "~/features/products/components/product-card";

const paramSchema = z.object({
  year: z.coerce.number(),
  month: z.coerce.number(),
  day: z.coerce.number(),
});

export function loader({ params }: Route.LoaderArgs) {
  const { success, data: parsedData } = paramSchema.safeParse(params);
  if (!success) {
    throw data(
      {
        error_code: "invalid_params",
        message: "Invalid params",
      },
      {
        status: 400,
      }
    );
  }
  const { year, month, day } = parsedData;

  const date = DateTime.fromObject(
    {
      year,
      month,
      day,
    },
    {
      zone: "Asia/Seoul",
    }
  );

  if (!date.isValid) {
    throw new Error("Invalid date");
  }

  const today = DateTime.now().setZone("Asia/Seoul").startOf("day");

  if (date > today) {
    throw data(
      {
        error_code: "future_date",
        message: "Future date",
      },
      {
        status: 400,
      }
    );
  }

  return {
    year: date.year,
    month: date.month,
    day: date.day,
  };
}

export default function DailyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  const urlDate = DateTime.fromObject({
    year: loaderData.year,
    month: loaderData.month,
    day: loaderData.day,
  });

  const previousDay = urlDate.minus({ day: 1 });
  const nextDay = urlDate.plus({ day: 1 });

  const isToday = urlDate.equals(DateTime.now().startOf("day"));

  return (
    <div className="space-y-10">
      <Hero title={`The best products of ${urlDate.toLocaleString()}`} />

      <div className="flex justify-center gap-2">
        <Button variant="secondary" asChild>
          <Link
            to={`/products/leaderboards/daily/${previousDay.year}/${previousDay.month}/${previousDay.day}`}
          >
            &larr; {previousDay.toLocaleString(DateTime.DATE_SHORT)}
          </Link>
        </Button>
        {!isToday && (
          <Button variant="secondary" asChild>
            <Link
              to={`/products/leaderboards/daily/${nextDay.year}/${nextDay.month}/${nextDay.day}`}
            >
              {nextDay.toLocaleString(DateTime.DATE_SHORT)} &rarr;
            </Link>
          </Button>
        )}
      </div>

      <div className="space-y-5 w-full max-w-screen-md mx-auto">
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
      </div>
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        {error.data.message} | {error.data.error_code}
      </div>
    );
  }

  if (error instanceof Error) {
    return <div>Error in leaderboard: {error.message}</div>;
  }

  return <div>Unknown Error in leaderboard</div>;
}
