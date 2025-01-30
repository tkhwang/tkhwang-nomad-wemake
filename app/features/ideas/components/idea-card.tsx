import { DotIcon, EyeIcon, HeartIcon, LockIcon } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { cn } from "~/lib/utils";

interface IdeaCardProps {
  id: string;
  title: string;
  viewCount: number;
  timeAgo: string;
  likesCount: number;
  claimed: boolean;
}

export function IdeaCard({
  id,
  title,
  viewCount,
  timeAgo,
  likesCount,
  claimed,
}: IdeaCardProps) {
  return (
    <Card className="bg-transparent hover:bg-card/50 transition-colors">
      <CardHeader>
        <Link to={`/ideas/${id}/claim`}>
          <CardTitle className="text-xl">
            <span
              className={cn(
                claimed
                  ? "bg-muted-foreground selection:bg-muted-foreground"
                  : ""
              )}
            >
              {title}
            </span>
          </CardTitle>
        </Link>
      </CardHeader>
      <CardContent className="flex items-center text-sm">
        <div className="flex items-center gap-2">
          <EyeIcon className="w-4 h-4" />
          <span>{viewCount}</span>
        </div>
        <DotIcon className="w-4 h-4" />
        <span>{timeAgo}</span>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline">
          <HeartIcon className="w-4 h-4" />
          <span>{likesCount}</span>
        </Button>
        {!claimed ? (
          <Button>Claim idea now &rarr;</Button>
        ) : (
          <Button value="outline" disabled className="cursor-not-allowed">
            <LockIcon className="w-4 h-4" />
            Claimed
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
