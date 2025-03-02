import Header from "../header/Header";
import Companies from "../LandingPage/Companies";
import DreamJobs from "../LandingPage/DreamJob";
import JobCategory from "../LandingPage/JobCategory";

const HomePage = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
            <Header />
            <DreamJobs />
            <Companies />
            <JobCategory />
        </div>
    )
}
export default HomePage;