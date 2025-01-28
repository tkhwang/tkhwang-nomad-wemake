import {
  ChevronRightIcon,
  ChevronUpIcon,
  EyeIcon,
  MessageCircleIcon,
} from "lucide-react";
import { Link, type MetaFunction } from "react-router";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { ProductCard } from "~/features/products/components/product-card";

export const meta: MetaFunction = () => {
  return [
    { title: "Home | wemake" },
    {
      name: "description",
      content: "Welcome to wemake",
    },
  ];
};

export default function HomePage() {
  return (
    <div className="px-20">
      {/* product */}
      <div className="grid grid-cols-3 gap-4">
        {/* product */}
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Today's Products
          </h2>
          <p className="text-xl font-light text-foreground">
            The best products made by our community today.
          </p>
        </div>

        {/* project */}
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
