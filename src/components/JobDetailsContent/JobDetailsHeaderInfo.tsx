import React from "react";

type JobDetailsHeaderInfoProps = {
  title?: string;
  salary?: string;
  postDate?: number;
};

function JobDetailsHeaderInfo({
  title,
  salary,
  postDate,
}: JobDetailsHeaderInfoProps) {
  return (
    <div className="flex flex-wrap w-full ">
      <div className="job-title md:w-1/2 order-1 font-semibold">{title}</div>
      <div className="salary md:w-1/2 order-3 md:order-2 flex flex-col items-end  grow">
        <p className="font-semibold">{salary}</p>
        <p className="order-1 md:order-2">brutto per year</p>
      </div>
      <div className="date order-2 md:order-3 grow font-light text-slate-400">
        Posted {postDate} years ago
      </div>
    </div>
  );
}

export default JobDetailsHeaderInfo;
