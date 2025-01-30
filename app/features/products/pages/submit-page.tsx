import type { Route } from "~/types";
import type { MetaFunction } from "@remix-run/react";

interface SubmitPageProps extends Route.ComponentProps {}

export function meta(): MetaFunction {
  return [
    { title: "Submit Product | Product Hunt Clone" },
    { name: "description", content: "Submit your product" },
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  // Handle form submission
  return {};
}

export default function SubmitPage({ actionData }: SubmitPageProps) {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Submit Your Product</h1>
      {/* Submit form will go here */}
    </main>
  );
}
