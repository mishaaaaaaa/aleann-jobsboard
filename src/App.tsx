import React from "react";
import { Card } from "flowbite-react";
import "./App.css";
import JobcardList from "./components/JobcardList";

function App() {
  return (
    <div className="container mx-auto max-w-[800px] w-full h-screen flex-stretch justify-content-center border">
      <JobcardList />
    </div>
  );
}

export default App;
