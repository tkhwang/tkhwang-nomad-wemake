import { useSearchParams } from "react-router";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

type ProductPaginationProps = {
  totalPages: number;
};

export default function ProductPagination({
  totalPages,
}: ProductPaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page") ?? 1);

  const onClick = (page: number) => {
    searchParams.set("page", page.toString());
    setSearchParams(searchParams);
  };

  return (
    <Pagination>
      <PaginationContent>
        {page === 1 ? null : (
          <>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">{page - 1}</PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationLink href="#">{page}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
