import React, { useEffect, useState } from "react";
import "./App.css";
import JobDetails from "./pages/JobDetails";
import JobBoard from "./pages/JobBoard";
import useFetch from "./hooks/useFetch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { url } from "./urls/api";
import { access_token } from "./urls/access_token";

function App() {
  const { get, loading } = useFetch(url);
  const [serverData, setServerData] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(5);

  useEffect(() => {
    get(access_token).then((data: any) => setServerData(data));
  }, []);

  // Get current posts
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = serverData.slice(indexOfFirstJob, indexOfLastJob);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col justify-between">
      <Routes>
        <Route
          path="/"
          element={
            <JobBoard
              data={currentJobs}
              loading={loading}
              jobsPerPage={jobsPerPage}
              totalJobs={serverData.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          }
        />
        <Route
          path="/jobdetails/:id"
          element={<JobDetails data={serverData} />}
        />
      </Routes>
    </div>
  );
}

export default App;
