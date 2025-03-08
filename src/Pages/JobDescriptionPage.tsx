import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import JobDesc from "../JobDesc/JobDesc";
import RecommendedJobs from "../JobDesc/RecommendedJobs";

const JobDescriptionPage = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
            <Divider size="xs" />
            <Link className="my-4 inline-block" to="/find-jobs">
                <Button leftSection={<IconArrowLeft size={20} />} color="bright-sun.4" variant="light">Back</Button>
            </Link>
            <div className="flex gap-5 justify-around">
                <JobDesc />
                <RecommendedJobs />
            </div>
        </div>
    )
}
export default JobDescriptionPage;