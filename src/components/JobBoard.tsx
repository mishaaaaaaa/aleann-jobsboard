import React from "react";
import JobCard from "./JobCard";

export default function JobBoard() {
  return (
    <div className="container w-full border my-5 overflow-hidden space-y-3">
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
    </div>
  );
}
