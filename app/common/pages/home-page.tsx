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
        {/* product */}
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

        <Card className="bg-transparent hover:bg-card/50 transition-colors">
          <CardHeader className="flex flex-row items-center gap-2">
            <Avatar className="size-14">
              <AvatarFallback>N</AvatarFallback>
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <div className="space-y-2">
              <CardTitle className="text-2xl font-semibold leading-none tracking-tight">
                Discussion Title
              </CardTitle>
              <div className="flex gap-2 text-xs leading-tight text-muted-foreground">
                <span>Nico</span>
                <span>Productivity</span>
                <span>12 hours ago</span>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
