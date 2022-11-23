import React from "react";

type PaginationPropsType = {
  jobsPerPage: number;
  totalJobs: number;
  paginate: (n: number) => void;
  currentPage: number;
};

const Pagination = ({
  jobsPerPage,
  totalJobs,
  paginate,
  currentPage,
}: PaginationPropsType) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation border">
      <ul className="inline-flex items-center -space-x-px border ">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              currentPage === number
                ? "bg-blue-400 border-red-300 text-white hover:bg-blue-200 relative inline-flex items-center px-4 py-2  text-sm font-medium cursor-pointer"
                : "bg-white border-gray-300 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer"
            }
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
