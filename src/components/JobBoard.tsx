import React from "react";
import JobcardList from "./JobcardList";

export default function JobBoard() {
  return (
    <div className="container mx-auto max-w-[1240px] w-full h-screen flex-stretch justify-content-center border my-5">
      <JobcardList />
    </div>
  );
}
