import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconBookmark } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { card, desc, skills } from "../Data/JobDescData";

const JobDesc = () => {
    return (
        <div className="w-2/3">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-3 bg-mine-shaft-800 rounded-xl">
                        <img className="h-14" src={`/icons/Google.png`} alt={`Google Logo`} />
                    </div>
                    <div>
                        <div className="font-semibold text-2xl">SoftWare Engineer III</div>
                        <div className="text-lg text-mine-shaft-300"> Google &#x2022; 3 Days ago &#x2022;
                            48 Applicants
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <Link to="/apply-job">
                        <Button color="bright-sun.4" size="sm" variant="light">Apply</Button>
                    </Link>
                    <IconBookmark className="text-bright-sun-400 cursor-pointer" />
                </div>
            </div>
            <Divider my="xl" />
            <div className="flex justify-between">
                {
                    card.map((item: any, index: number) => <div key={index} className="flex flex-col items-center gap-1">
                        <ActionIcon color="bright-sun.4" className="!h-12 !w-12" variant="light" radius="xl" aria-label="Settings">
                            <item.icon className="h-4/5 w-4/5" stroke={1.5} />
                        </ActionIcon>
                        <div className="text-sm text-mine-shaft-300">{item.name}</div>
                        <div className="font-semibold">{item.value}</div>
                    </div>)
                }
            </div>
            <Divider my="xl" />
            <div>
                <div className="text-xl font-semibold mb-5">Required Skills</div>
                <div className="flex flex-wrap gap-3">
                    {
                        skills.map((item: any, index: number) => (
                            <ActionIcon key={index} color="bright-sun.4" className="!h-fit !w-fit !font-medium !text-sm " p="xs" variant="light" radius="xl" aria-label="Settings">
                                {item}
                            </ActionIcon>
                        ))}
                </div>
            </div>
            <Divider my="xl" />
            <div dangerouslySetInnerHTML={{ __html: desc }}></div>
        </div>
    )
}
export default JobDesc;