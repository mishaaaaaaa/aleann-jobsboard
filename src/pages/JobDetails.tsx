import React from "react";
import { bookmark, share } from "../icons/icons";
import Map from "../components/Map";
import Button from "../components/ui-kit/Button";
import KeyWordBlock from "../components/ui-kit/KeyWordBlock";
import BackButton from "../components/ui-kit/BackButton";
import group_of_people from "../images/group_of_people.jpg";
import persons from "../images/persons.jpg";
import building from "../images/building.jpg";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

//try to apply useNavigate (but need to refactor)

type JobDataProps = {
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

const textExtarct = (text: any) => {
  let splited = text?.split("\n");
  let textOnly = splited?.filter((el: any) => el.length >= 4);
  let jobDescription = textOnly[0];
  let jobResp = textOnly[2];
  let jobBenefits = textOnly[4];
  return [jobDescription, jobResp, jobBenefits];
};

export default function JobDetails(props: JobDataProps) {
  const { id } = useParams();
  const { data } = props;
  const job = data.find((el) => el.id === id);
  const descRespBenefits: any = job?.description;
  let jobDescription, jobResp, jobBenefits;
  if (descRespBenefits?.length > 0) {
    [jobDescription, jobResp, jobBenefits] = textExtarct(descRespBenefits);
  }
  let benefits;
  if (jobBenefits) {
    benefits = jobBenefits.split(".").filter((b: string) => b.length > 0);
  }
  console.log(benefits);
  // const [jobDescription, jobResp, jobBenefits] = textExtarct(descRespBenefits);

  // console.log(jobDescription, jobResp, jobBenefits);

  return (
    <>
      <div className="container mx-auto max-w-[1240px] h-screen flex flex-col md:flex-row  my-5 p-3 ">
        <div className="flex flex-col   w-full md:w-3/5 space-y-5">
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
          <Button content="Apply now" className="btn" hidden={true} />
          <div className="flex flex-wrap w-full ">
            <div className="job-title md:w-1/2 order-1 font-semibold">
              {job?.title}
            </div>
            <div className="salary md:w-1/2 order-3 md:order-2 flex flex-col items-end  grow">
              <p className="font-semibold">{job?.salary}</p>
              <p className="order-1 md:order-2">brutto per year</p>
              {/* toDo: align brutto per year with salary (make them start from one point) */}
            </div>
            <div className="date order-2 md:order-3 grow font-light text-slate-400">
              Posted {job?.updatedAt}
            </div>
          </div>
          <div className="main_job_text space-y-5 flex flex-col">
            <div className="description text-base">{jobDescription}</div>
            <div className="resp_title text-lg font-semibold pt-2">
              Responsibilities
            </div>
            <div className="resp_description space-y-5">
              <p className="text-base">{jobResp}</p>
            </div>
            <div className="compensation_benefits">
              <p className="text-lg font-medium">Compensation & Benefits:</p>
              <ul className="list-square">
                {/* <p>Our physicians enjoy a wide range of benefits, including:</p> */}
                {benefits &&
                  benefits.map((benefit: string) => {
                    return (
                      <li className="text-neutral-400">
                        <div className="text-black">{benefit}</div>
                      </li>
                    );
                  })}
              </ul>
            </div>
            {/* refactor btn in component so i can add proprty to hide/unhide btn on small screens */}
            <Button
              content="Apply now"
              hidden={false}
              className="self-center md:self-start"
            />
          </div>
          <div className="aditional_info grow">
            <p className="text-xl font-semibold mb-2">Additional info</p>
            <div className="employment_type border-t-2 space-y-2 pt-2">
              <p className="text-lg">Employment type</p>
              <div className="flex w-full space-x-2 ">
                {job &&
                  job.employment_type.map((et) => {
                    return (
                      <KeyWordBlock
                        content={et}
                        className="flex border-blue-700 bg-blue-100 text-blue-700"
                      />
                    );
                  })}
              </div>
              <p className="text-lg">Benefits</p>
              <div className="flex w-full space-x-2 ">
                {job &&
                  job.benefits.map((et) => {
                    return (
                      <KeyWordBlock
                        content={et}
                        className="flex border-yellow-300 bg-yellow-100 text-yellow-500"
                      />
                    );
                  })}
              </div>
            </div>
            <div className="benefits"></div>
          </div>
          <div className="attached_images grow">
            <p className="text-xl font-semibold mb-2">Attached images</p>
            <div className="images_group border-t-2 space-y-2 pt-2 flex items-center overflow-x-auto space-x-2">
              {job &&
                job.pictures.map((pic) => {
                  return (
                    <div className="img  object-contain">
                      <img
                        src={pic}
                        className="w-full max-w-xl h-auto rounded-lg"
                        alt="image description"
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="back-bt mr-10 relative ">
            <Link to="/" className="absolute -left-12 flex">
              <BackButton content="RETURN TO JOB BOARD" hidden={true} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col   w-full md:w-2/5">
          <Map />
        </div>
      </div>
    </>
  );
}
