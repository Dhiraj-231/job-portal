import { jobList } from "../Data/JobsData";
import { talents } from "../Data/TalentData";
import Sort from "../FindJobs/Sort";
import TalentsCard from "./TalentsCard";
const Talents = () => {
    return (
        <div className="p-5">
            <div className="flex justify-between">
                <div className="text-2xl font-semibold">Talents</div>
                <Sort />
            </div>
            <div className="mt-10 flex flex-wrap gap-8 justify-between">
                {
                    talents.map((talent, index) => (
                        <TalentsCard key={index} {...talent} />
                    ))
                }
            </div>
        </div>
    );
}

export default Talents;