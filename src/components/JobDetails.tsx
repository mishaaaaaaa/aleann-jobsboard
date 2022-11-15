import React from "react";
import { bookmark, share } from "../icnos/icons";

export default function JobDetails() {
  return (
    <div className="container mx-auto max-w-[1240px] w-full h-screen flex sm:flex-col md:flex-row flex-stretch border my-5">
      <div className="flex flex-col border grow">
        <div className="job-title flex justify-between border-b-2 ">
          <div className="flex grow align-middle">Job details</div>
          <div className="grow icons_helpers flex justify-end pb-2  align-middle">
            <div className="save flex mr-5">
              <div className="">{bookmark}</div>
              <div className="">Save to my list</div>
            </div>
            <div className="share flex">
              <div className="">{share}</div>
              <div className="">Share</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col border grow">here will be some map</div>
    </div>
  );
}
