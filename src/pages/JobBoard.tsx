import { useState } from "react";
import JobCard from "../components/JobCard";
import { Pagination } from "flowbite-react";

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

  const onPageChange = () => {
    console.log("Pagination changed");
  };

  return (
    <div className="container w-full border my-5 space-y-3 flex flex-col ">
      {data.map((card) => (
        <JobCard card={card} key={card.id} />
      ))}
      <Pagination
        className="self-center"
        currentPage={1}
        totalPages={2}
        onPageChange={onPageChange}
      />
    </div>
  );
}
