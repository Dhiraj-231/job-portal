import { Badge, Tabs } from "@mantine/core";
import JobDesc from "../JobDesc/JobDesc";
import { talents } from "../Data/TalentData";
import TalentsCard from "../FindTalent/TalentsCard";

const PostedJobDescription = () => {
    return (
        <div className="mt-5 w-3/4 px-5">
            <div className="text-2xl font-semibold flex items-center"> Software Engineer <Badge variant="light" color="bright-sun.4" ml="sm" size="sm">Badge</Badge> </div>
            <div className="font-medium text-mine-shaft-300 mb-5">New York , USA </div>
            <div>
                <Tabs variant="outline" defaultValue="overview" radius="lg">
                    <Tabs.List className="[&_button]:text-lg font-semibold mb-5 [&_button[data-active='true']]:text-bright-sun-400">
                        <Tabs.Tab value="overview">Overview</Tabs.Tab>
                        <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                        <Tabs.Tab value="invited">Invited</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="overview" className="[&>div]:w-full"><JobDesc edit /></Tabs.Panel>
                    <Tabs.Panel value="applicants">
                        <div className="mt-10 flex flex-wrap gap-10 justify-around ">
                            {
                                talents.map((talent, index) => (
                                    index < 6 && <TalentsCard key={index} {...talent} posted />
                                ))
                            }
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="invited">
                        <div className="mt-10 flex flex-wrap gap-10 justify-around  ">
                            {
                                talents.map((talent, index) => (
                                    index < 6 && <TalentsCard key={index} {...talent} invited />
                                ))
                            }
                        </div>
                    </Tabs.Panel>
                </Tabs>
            </div>
        </div>
    );
}

export default PostedJobDescription;