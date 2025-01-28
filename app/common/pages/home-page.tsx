import {
  ChevronRightIcon,
  ChevronUpIcon,
  EyeIcon,
  MessageCircleIcon,
} from "lucide-react";
import { Link, type MetaFunction } from "react-router";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { ProductCard } from "~/features/products/components/product-card";
import { PostCard } from "~/features/community/components/post-card";

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
    <div className="px-20 space-y-40">
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
          <Button variant="link" asChild className="text-xl p-0">
            <Link to="/products/leaderboards">Explore all products &rarr;</Link>
          </Button>
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

      <div className="grid grid-cols-3 gap-4">
        {/* heading section */}
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Latest Discussions
          </h2>
          <p className="text-xl font-light text-foreground">
            The best products made by our community today.
          </p>
          <Button variant="link" asChild className="text-xl p-0">
            <Link to="/community">Explore all discussions &rarr;</Link>
          </Button>
        </div>

        {Array.from({ length: 10 }).map((_, index) => (
          <PostCard
            id={`post-${index}`}
            title="What is the best productivity tool?"
            author="Nico"
            authorAvatarUrl="https://github.com/shadcn.png"
            category="Productivity"
            timeAgo="12 hours ago"
          />
        ))}
      </div>
    </div>
  );
}
