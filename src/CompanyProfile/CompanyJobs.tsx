import { jobList } from "../Data/JobsData";
import JobCards from "../FindJobs/JobCards";

const CompanyJobs = () => {
    return (
        <div className="mt-10 flex flex-wrap gap-8">
            {
                jobList.map((job, index) => <JobCards key={index} {...job} />)
            }
        </div>
    );
}
export default CompanyJobs;