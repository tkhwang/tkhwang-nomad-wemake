import { Link } from "react-router";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Button } from "~/common/components/ui/button";
import { DotIcon } from "lucide-react";

interface PostCardProps {
  id: string;
  title: string;
  author: string;
  authorAvatarUrl?: string;
  category: string;
  timeAgo: string;
}

export function PostCard({
  id,
  title,
  author,
  authorAvatarUrl,
  category,
  timeAgo,
}: PostCardProps) {
  return (
    <Link to={`/community/posts/${id}`}>
      <Card className="bg-transparent hover:bg-card/50 transition-colors">
        <CardHeader className="flex flex-row items-center gap-2">
          <Avatar className="size-14">
            <AvatarFallback>N</AvatarFallback>
            {authorAvatarUrl && <AvatarImage src={authorAvatarUrl} />}
          </Avatar>
          <div className="space-y-2">
            <CardTitle className="text-2xl font-semibold leading-none tracking-tight">
              {title}
            </CardTitle>
            <div className="flex gap-2 text-xs leading-tight text-muted-foreground">
              <span>
                {author} on {category}
              </span>
              <DotIcon className="w-4 h-4" />
              <span>{timeAgo}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <Button variant="link">Reply &rarr;</Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
