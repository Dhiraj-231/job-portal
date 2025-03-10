import { talents } from "../Data/TalentData";
import TalentsCard from "../FindTalent/TalentsCard";

const CompanyEmployee = () => {
    return (
        <div className="mt-10 flex flex-wrap gap-10 ">
            {
                talents.map((talent, index) => (
                    index < 6 && <TalentsCard key={index} {...talent} />
                ))
            }
        </div>
    );
}

export default CompanyEmployee;