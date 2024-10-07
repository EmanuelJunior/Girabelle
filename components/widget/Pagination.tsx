import { Pagination as NextUIPagination } from "@nextui-org/pagination";
import { FC } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center mt-8">
    <NextUIPagination
      total={totalPages}
      initialPage={currentPage}
      onChange={(page) => onPageChange(page)}
      color="success"
      showControls
      size="sm"
      showShadow
      classNames={{
        cursor: 'text-white bg-gradient-to-br from-emerald-600 to-emerald-300'
      }}
    />
  </div>
);