import JobCard from "../components/Jobcard";
import { FetchDataType } from "../types/FetchDataType";
import Loader from "../components/ui-kit/Loader";
import Pagination from "../components/Pagination";
import { v4 } from "uuid";

export default function JobBoard(props: FetchDataType) {
  const { data, loading, jobsPerPage, totalJobs, paginate, currentPage } =
    props;

  return (
    <div className="wrapper bg-primary min-h-screen">
      <div className="container mx-auto max-w-[1240px]  my-5 space-y-3 flex flex-col ">
        {loading ? (
          <Loader />
        ) : (
          data.map((card) => {
            return <JobCard card={card} key={card.id} />;
          })
        )}
      </div>
      <div className="pagination-wrapper flex justify-center mb-3 ">
        {loading ? null : (
          <Pagination
            jobsPerPage={jobsPerPage}
            totalJobs={totalJobs}
            paginate={paginate}
            currentPage={currentPage}
          />
        )}
      </div>
    </div>
  );
}
