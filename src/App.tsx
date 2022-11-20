import React from "react";
import "./App.css";
import JobDetails from "./components/JobDetails";
import { Pagination } from "flowbite-react";

function App() {
  const onPageChange = () => {
    console.log("Pagination changed");
  };
  return (
    <>
      <JobDetails />
      <Pagination
        className="fixed bottom-2 left-50 "
        currentPage={9}
        totalPages={100}
        onPageChange={onPageChange}
      />
    </>
  );
}

export default App;
