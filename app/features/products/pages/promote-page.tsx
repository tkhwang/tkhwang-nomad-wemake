import type { Route } from "~/types";
import type { MetaFunction } from "@remix-run/react";

interface PromotePageProps extends Route.ComponentProps {}

export function meta(): MetaFunction {
  return [
    { title: "Promote Product | Product Hunt Clone" },
    { name: "description", content: "Promote your product" },
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {
    promotionPlans: [],
  };
}

export function action({ request }: Route.ActionArgs) {
  // Handle promotion form submission
  return {};
}

export default function PromotePage({ loaderData }: PromotePageProps) {
  const { promotionPlans } = loaderData;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Promote Your Product</h1>
      {/* Promotion plans and form */}
    </main>
  );
}
