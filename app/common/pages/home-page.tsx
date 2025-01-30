import {
  Car,
  ChevronRightIcon,
  ChevronUpIcon,
  DotIcon,
  EyeIcon,
  HeartIcon,
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
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { ProductCard } from "~/features/products/components/product-card";
import { PostCard } from "~/features/community/components/post-card";
import { IdeaCard } from "~/features/ideas/components/idea-card";
import { Badge } from "~/common/components/ui/badge";
import { JobCard } from "~/features/jobs/components/job-card";
import { TeamCard } from "~/features/teams/components/team-card";
import type { Route } from "~/types";

interface HomePageProps extends Route.ComponentProps {}

export function meta(): MetaFunction {
  return [
    { title: "Home | Product Hunt Clone" },
    { name: "description", content: "Discover the best new products" },
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {
    featured: [],
    trending: [],
  };
}

export function action({}: Route.ActionArgs) {
  return {};
}

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">
        Discover the best new products
      </h1>
      {/* Featured and trending products sections will go here */}
    </main>
  );
}
