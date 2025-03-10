import { Avatar, Button, Divider, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconCalendarMonth, IconHeart, IconMapPin } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { DateInput, TimeInput } from "@mantine/dates";
import dayjs from "dayjs";

const TalentsCard = (props: any) => {
    const [opened, { open, close }] = useDisclosure(false);
    const [value, setValue] = useState<Date | null>(null);
    const ref = useRef<HTMLInputElement>(null);
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
            {
                props.invited ? <div className="flex gap-2 text-mine-shaft-200 text-sm items-center">
                    <IconCalendarMonth stroke={1.5} /> Interview: August 27,2024 10:00 AM
                </div> : <div className="flex justify-between">
                    <div className="font-semibold text-mine-shaft-200">
                        {props.expectedCtc}
                    </div>
                    <div className="flex gap-1 text-mine-shaft-400 text-xs items-center">
                        <IconMapPin className="h-5 w-5" stroke={1.5} /> {props.location}
                    </div>
                </div>
            }

            <Divider size="xs" color="mine-shaft.7" />
            <div className="flex [&>*]:w-1/2  [&>*]:p-1">
                {
                    !props.invited && <>
                        <Link to="/talent-profile">
                            <Button fullWidth color="bright-sun.4" variant="outline">Profile</Button>
                        </Link>
                        <div>
                            {props.posted ? <Button onClick={open} rightSection={<IconCalendarMonth className="w-5 h-5" />} fullWidth color="bright-sun.4" variant="light">Schedule</Button> : <Button fullWidth color="bright-sun.4" variant="light">Message</Button>}
                        </div>
                    </>
                }
                {
                    props.invited && <>
                        <div>
                            <Button fullWidth color="bright-sun.4" variant="outline">Accept</Button>
                        </div>
                        <div>
                            <Button fullWidth color="bright-sun.4" variant="light">Reject</Button>
                        </div>
                    </>
                }
            </div>
            <Modal opened={opened} onClose={close} title="Schedule Interview" centered>
                <div className="flex flex-col gap-4">
                    <DateInput minDate={new Date()} maxDate={dayjs(new Date()).add(1, 'month').toDate()}
                        value={value} onChange={setValue} label="Date" placeholder="Enter date.." />
                    <TimeInput label=" Time " ref={ref} onClick={() => ref.current?.showPicker()} />
                    <Button fullWidth color="bright-sun.4" variant="light">Schedule</Button>
                </div>
            </Modal>
        </div>
    );
};

export default TalentsCard;