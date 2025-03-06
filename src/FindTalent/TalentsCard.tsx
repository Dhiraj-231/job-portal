import { Avatar, Button, Divider, Text } from "@mantine/core";
import { IconHeart, IconMapPin } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const TalentsCard = (props: any) => {
    return (
        <div className="bg-mine-shaft-900 p-4 w-96 rounded-xl flex flex-col gap-3 hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400 cursor-pointer">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-2 bg-mine-shaft-800 rounded-full">
                        <Avatar size="lg" src={`${props.image}.png`} alt={`${props.image} Logo`} />
                    </div>
                    <div>
                        <div className="font-semibold text-lg">{props.name}</div>
                        <div className="text-sm text-mine-shaft-300"> {props.role} &#x2022;
                            {props.company}
                        </div>
                    </div>
                </div>
                <IconHeart className="text-mine-shaft-300 cursor-pointer" />
            </div>
            <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs">
                {
                    props.topSkills.map((skill: string, index: any) => (
                        <div key={index}>{skill}</div>
                    ))
                }
            </div>
            <Text className="!text-xs text-justify !text-mine-shaft-300" lineClamp={3}>{props.about}</Text>
            <Divider size="xs" color="mine-shaft.7" />
            <div className="flex justify-between">
                <div className="font-semibold text-mine-shaft-200">
                    {props.expectedCtc}
                </div>
                <div className="flex gap-1 text-mine-shaft-400 text-xs items-center">
                    <IconMapPin className="h-5 w-5" stroke={1.5} /> {props.location}
                </div>
            </div>
            <Divider size="xs" color="mine-shaft.7" />
            <div className="flex [&>*]:w-1/2  [&>*]:p-1">
                <Link to="/talent-profile">
                    <Button fullWidth color="bright-sun.4" variant="outline">Profile</Button>
                </Link>
                <div>
                    <Button fullWidth color="bright-sun.4" variant="light">Message</Button>
                </div>

            </div>
        </div>
    );
};

export default TalentsCard;