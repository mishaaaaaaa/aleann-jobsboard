import React from "react";
import "./App.css";
import JobDetails from "./components/JobDetails";
import { Pagination } from "flowbite-react";
import JobBoard from "./components/JobBoard";

function App() {
  const onPageChange = () => {
    console.log("Pagination changed");
  };
  return (
    <div className="container mx-auto max-w-[1240px] max-h-screen  flex flex-col justify-between border ">
      <JobBoard />
      <Pagination
        className="self-center"
        currentPage={9}
        totalPages={100}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default App;
