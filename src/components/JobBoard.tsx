import { useState } from "react";
import JobCard from "./JobCard";

type JobListProps = {
  data: {
    address: string;
    benefits: string[];
    createdAt: string;
    description: string;
    email: string;
    employment_type: string[];
    id: string;
    location: { lat: number; long: number };
    name: string;
    phone: string;
    pictures: string[];
    salary: string;
    title: string;
    updatedAt: string;
  }[];
};

export default function JobBoard(props: JobListProps) {
  const { data } = props;
  console.log(data);
  const [jobCardData, setJobCardData] = useState([]);
  return (
    <div className="container w-full border my-5 space-y-3">
      {/* <JobCard cardData={jobCardData}/>
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard /> */}
      {data.map((card) => (
        <JobCard card={card} />
      ))}
    </div>
  );
}
