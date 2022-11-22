import { useState } from "react";
import JobCard from "../components/Jobcard";
import { FetchDataType } from "../types/FetchDataType";
import { Pagination } from "flowbite-react";

export default function JobBoard(props: FetchDataType) {
  const { data } = props;

  const onPageChange = () => {
    console.log("Pagination changed");
  };

  return (
    <div className="container w-full border my-5 space-y-3 flex flex-col ">
      {data.map((card) => (
        <JobCard card={card} key={card.id} />
      ))}
      <Pagination
        className="self-center"
        currentPage={1}
        totalPages={2}
        onPageChange={onPageChange}
      />
    </div>
  );
}
