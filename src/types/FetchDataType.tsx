import { JobType } from "./JobType";
export type FetchDataType = {
  data: JobType[];
  loading?: boolean;
  jobsPerPage?: any;
  totalJobs?: any;
  paginate?: any;
  currentPage?: any;
};
