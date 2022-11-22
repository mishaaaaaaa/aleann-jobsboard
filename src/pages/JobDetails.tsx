import { FetchDataType } from "../types/FetchDataType";
import Map from "../components/Map";
import Button from "../components/ui-kit/Button";
import BackButton from "../components/ui-kit/BackButton";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ImageGroup from "../components/JobDetailsContent/ImageGroup";
import AdditionalInfo from "../components/JobDetailsContent/AdditionalInfo";
import JobDetailsHeader from "../components/JobDetailsContent/JobDetailsHeader";
import JobDetailsHeaderInfo from "../components/JobDetailsContent/JobDetailsHeaderInfo";
import JobMainInfo from "../components/JobDetailsContent/JobMainInfo";

//text extraction from "description"
const textExtarct = (text: string) => {
  let splited = text?.split("\n");
  let textOnly = splited?.filter((el: any) => el.length >= 4); //
  let jobDescription = textOnly[0];
  let jobResp = textOnly[2];
  let jobBenefits = textOnly[4];
  return [jobDescription, jobResp, jobBenefits];
};

export default function JobDetails(props: FetchDataType) {
  const { id } = useParams();

  // getting array of fetched data from server
  const { data } = props;

  // finding proper job from passed list of jobs
  const job = data.find((el: any) => el.id === id);

  // description, responsibility and benefits descriptions grouped as one value (access by "description" key), so i apply textExtarct function to get the text separated

  console.log(job);

  const descRespBenefits: any = job?.description;
  let jobDescription, jobResp, jobBenefits;
  if (descRespBenefits?.length > 0) {
    [jobDescription, jobResp, jobBenefits] = textExtarct(descRespBenefits);
  }

  //benefits are grouped in one paragraph, so here i separate them
  let benefits;
  if (jobBenefits) {
    benefits = jobBenefits.split(".").filter((b: string) => b.length > 0);
  }

  return (
    <>
      <div className="container mx-auto max-w-[1240px] h-screen flex flex-col md:flex-row  my-5 p-3 ">
        <div className="flex flex-col w-full md:w-3/5 space-y-5">
          <JobDetailsHeader />
          <Button content="Apply now" className="btn" hidden={true} />
          <JobDetailsHeaderInfo
            title={job?.title}
            salary={job?.salary}
            postDate={job?.updatedAt}
          />
          <JobMainInfo
            description={jobDescription}
            responsibility={jobResp}
            benefits={benefits}
          />
          <AdditionalInfo
            employment_type={job?.employment_type}
            benefits={job?.benefits}
          />
          <ImageGroup imgs={job?.pictures} />
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
