import Benefits from "./Benefits";
import Button from "../ui-kit/Button";

type JobMainInfoProps = {
  description?: string;
  responsibility?: string;
  benefits?: string[];
};

function JobMainInfo({
  description,
  responsibility,
  benefits,
}: JobMainInfoProps) {
  return (
    <div className="main_job_text space-y-5 flex flex-col">
      <div className="description text-base">{description}</div>
      <div className="resp_title text-lg font-semibold pt-2">
        Responsibilities
      </div>
      <div className="resp_description space-y-5">
        <p className="text-base">{responsibility}</p>
      </div>
      <Benefits benefits={benefits} />
      <Button
        content="Apply now"
        hidden={false}
        className="self-center md:self-start"
      />
    </div>
  );
}

export default JobMainInfo;
