import React from "react";
import { bookmark, share } from "../../icons/icons";

function JobDetailsHeader() {
  return (
    <div className="job-title  justify-between items-center md:border-b-2 border-0 flex flex-col md:flex-row">
      <div className="flex grow items-center md:w-1/2 w-full">
        <p className="text-xl font-semibold">Job details</p>
      </div>
      <div className="flex   justify-start md:justify-end  items-center pr-5 space-x-3 border-t-2 md:border-0 md:w-1/2 w-full mt-2 md:mt-0">
        <div className="">{bookmark}</div>
        <div className="">Save to my list</div>
        <div className="">{share}</div>
        <div className="">Share</div>
      </div>
    </div>
  );
}

export default JobDetailsHeader;
