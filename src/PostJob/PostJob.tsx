import { Button, TagsInput } from "@mantine/core";
import { fields } from "../Data/PostJob";
import RichTextEditor1 from "./RichTextEditor1";
import SelectInput from "./SelectInput";

const PostJob = () => {
    const select = fields;
    return (
        <div className="w-3/4 mx-auto mt-3">
            <div className="text-2xl font-semibold mb-5">Post a Job</div>
            <div className="flex flex-col gap-5">
                <div className="flex gap-10 [&>*]:w-1/2">
                    <SelectInput {...select[0]} />
                    <SelectInput {...select[1]} />
                </div>
                <div className="flex gap-10 [&>*]:w-1/2">
                    <SelectInput {...select[2]} />
                    <SelectInput {...select[3]} />
                </div>
                <div className="flex gap-10 [&>*]:w-1/2">
                    <SelectInput {...select[4]} />
                    <SelectInput {...select[5]} />
                </div>
                <TagsInput withAsterisk label="Skill" placeholder="Enter skill" splitChars={[',', ' ', '|']} clearable acceptValueOnBlur />
                <div className="[&_button[data-active='true']]:!text-bright-sun-400 [&_button[data-active='true']]:!bg-bright-sun-400/20">
                    <div className="text-sm font-medium">Job Description</div>
                    <RichTextEditor1 />
                </div>
                <div className="flex gap-5">
                    <Button color="bright-sun.4" variant="light">Publish Job</Button>
                    <Button color="bright-sun.4" variant="outline">Save as Draft</Button>
                </div>
            </div>
        </div>
    );
};
export default PostJob;