import Header from "../header/Header";
import Companies from "../LandingPage/Companies";
import DreamJobs from "../LandingPage/DreamJob";
import JobCategory from "../LandingPage/JobCategory";
import Subscribe from "../LandingPage/Subscribe";
import Testonimal from "../LandingPage/Testonimal";
import WorkingPage from "../LandingPage/WorkingPage";

const HomePage = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
            <Header />
            <DreamJobs />
            <Companies />
            <JobCategory />
            <WorkingPage />
            <Testonimal />
            <Subscribe />
        </div>
    )
}
export default HomePage;