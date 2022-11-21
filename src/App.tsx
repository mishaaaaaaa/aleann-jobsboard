import React, { useEffect, useState } from "react";
import "./App.css";
import JobDetails from "./components/JobDetails";
import { Pagination } from "flowbite-react";
import JobBoard from "./components/JobBoard";
import useFetch from "./hooks/useFetch";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const { get } = useFetch(
    "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?"
  );
  const [serverData, setServerData] = useState<any>([]);
  const onPageChange = () => {
    console.log("Pagination changed");
  };

  useEffect(() => {
    get("access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu").then(
      (data: any) => setServerData(data)
    );
  }, []);
  return (
    <div className="container mx-auto max-w-[1240px] max-h-screen  flex flex-col justify-between border ">
      <Router>
        <Routes>
          <Route path="/" element={<JobBoard data={serverData} />} />
          <Route path="/jobdetails/:id" element={<JobDetails />} />
        </Routes>
      </Router>
      {/* <Pagination
        className="self-center"
        currentPage={1}
        totalPages={2}
        onPageChange={onPageChange}
      /> */}
    </div>
  );
}

export default App;
