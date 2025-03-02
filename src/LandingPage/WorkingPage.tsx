import { Avatar } from "@mantine/core";
import { work } from "../Data/Data";

const WorkingPage = () => {
    return (
        <div className="mt-20 pb-5">
            <div className="text-4xl text-center mb-3 font-semibold text-mine-shaft-100">How it<span className="text-bright-sun-400"> Works </span></div>
            <div className="text-lg mb-10 text-mine-shaft-300 text-center w-1/2 mx-auto">Effortlessly navigate through the process and land your dream job.</div>
            <div className="flex px-16 justify-between items-center">
                <div className="relative">
                    <img className="w-[30rem]" src="/Working/Girl.png" alt="girl" />
                    <div className="w-36 top-[15%] right-0 absolute flex flex-col items-center gap-1 border border-bright-sun-400 rounded-xl py-3 px-1 backdrop-blur-md">
                        <Avatar className="!h-16 !w-16" src="avatar1.png" alt="it's me" />
                        <div className="text-sm font-semibold text-mine-shaft-200 text-center">Complete Your Profile</div>
                        <div className="text-xs text-mine-shaft-300">70% Completed</div>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    {
                        work.map((work, index) => <div key={index} className="flex items-center gap-4">
                            <div className="p-2.5 bg-bright-sun-300 rounded-full">
                                <img className="h-12 w-12" src={`Working/${work.name}.png`} alt={`${work.name}`} />
                            </div>
                            <div>
                                <div className="text-mine-shaft-200 text-xl font-semibold">{work.name}</div>
                                <div className="text-mine-shaft-300">{work.desc}</div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
}

export default WorkingPage;