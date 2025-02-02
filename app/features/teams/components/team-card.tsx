import { Link } from "react-router";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Badge } from "~/common/components/ui/badge";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";

interface TeamCardProps {
  id: string;
  leaderUserName: string;
  leaderAvatarUrl: string;
  potitioins: string[];
  projectDescription: string;
}

export function TeamCard({
  id,
  leaderUserName,
  leaderAvatarUrl,
  potitioins,
  projectDescription,
}: TeamCardProps) {
  return (
    <Link to={`/teams/${id}`}>
      <Card className="bg-transparent hover:bg-card/50 transition-colors">
        <CardHeader className="flex flex-row items-center">
          <CardTitle className="text-base">
            <Badge
              variant="secondary"
              className="inline-flex shadown-sm items-center text-base"
            >
              <span>@{leaderUserName}</span>
              <Avatar className="size-5">
                <AvatarFallback>{leaderUserName.toUpperCase()}</AvatarFallback>
                <AvatarImage src={leaderAvatarUrl} />
              </Avatar>
            </Badge>
            <span>is looking for </span>
            {potitioins.map((potitioin, index) => (
              <Badge key={index} className="text-base">
                {potitioin}
              </Badge>
            ))}
            <span>to build</span>
            <span>{projectDescription}</span>
          </CardTitle>
        </CardHeader>
        <CardFooter className="justify-end">
          <Button variant="link">Join team &rarr;</Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
