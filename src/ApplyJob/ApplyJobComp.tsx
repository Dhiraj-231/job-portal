import { Button, Divider, FileInput, LoadingOverlay, Notification, NumberInput, Textarea, TextInput } from "@mantine/core";
import { IconBookmark, IconCheck, IconFileCv } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ApplyJobComp = () => {
    const [preview, setPreview] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [sec, setSec] = useState(5);
    const navigate = useNavigate();
    const handlePreview = () => {
        setPreview(!preview);
        setSubmit(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    const handleSubmit = () => {
        setSubmit(true);
        let x = 5;
        setInterval(() => {
            x--;
            setSec(x);
            if (x === 0) {
                clearInterval(x);
                navigate('/find-jobs');
            }
        }, 1000);
    }
    return (
        <>
            <div className="w-2/3 mx-auto">
                <LoadingOverlay
                    className="!fixed"
                    visible={submit}
                    zIndex={1000}
                    overlayProps={{ radius: 'sm', blur: 2 }}
                    loaderProps={{ color: 'bright-sun.4', type: 'bars' }}
                />
                <div className="flex justify-between">
                    <div className="flex gap-2 items-center">
                        <div className="p-3 bg-mine-shaft-800 rounded-xl">
                            <img className="h-14" src={`/icons/Google.png`} alt={`Google Logo`} />
                        </div>
                        <div className="flex flex-col gap-1">
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
                <div className="text-xl font-semibold mb-5">Submit Your Application</div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-10 [&>*]:w-1/2">
                        <TextInput className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`} readOnly={preview} variant={preview ? "unstyled" : "default"} label="Full Name" withAsterisk placeholder="Enter Name" />
                        <TextInput className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`} readOnly={preview} variant={preview ? "unstyled" : "default"} label=" Email " withAsterisk placeholder="Enter email" />
                    </div>
                    <div className="flex gap-10 [&>*]:w-1/2">
                        <NumberInput className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`} readOnly={preview} variant={preview ? "unstyled" : "default"} clampBehavior="strict" label="Phone Number" hideControls withAsterisk min={0} max={9999999999} placeholder="Enter Phone Number" />
                        <TextInput className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`} readOnly={preview} variant={preview ? "unstyled" : "default"} label=" Personal Website " withAsterisk placeholder="Enter Url" />
                    </div>
                    <FileInput withAsterisk
                        className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`} readOnly={preview} variant={preview ? "unstyled" : "default"}
                        rightSection={<IconFileCv />}
                        label="Attach your CV"
                        placeholder="Your CV"
                        rightSectionPointerEvents="none"
                        mt="md"
                    />
                    <Textarea withAsterisk
                        className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`} readOnly={preview} variant={preview ? "unstyled" : "default"}
                        placeholder="Type something about your self..."
                        label="Cover Letter"
                        autosize
                        minRows={2}
                    />
                    {!preview && <Button onClick={handlePreview} color="bright-sun.4" variant="light">Preview</Button>}
                    {
                        preview && <div className="flex gap-10 [&>*]:w-1/2">
                            <Button fullWidth onClick={handlePreview} color="bright-sun.4" variant="outline">Edit</Button>
                            <Button fullWidth onClick={handleSubmit} color="bright-sun.4" variant="light">Submit</Button>
                        </div>
                    }
                </div>
            </div>
            <Notification withBorder icon={<IconCheck />} className={`!border-bright-sun-400 -translate-y-[150px] !fixed top-0 left-[35%] z-[1001] transition duration-300 ease-in-out ${submit ? "translate-y-[0px]" : "translate-y-[-150px]"}`} color="teal" title="Application Submitted" mt="md" withCloseButton={false}>
                Redirecting to Find Jobs in {sec} Seconds......
            </Notification>
        </>
    )
};

export default ApplyJobComp;