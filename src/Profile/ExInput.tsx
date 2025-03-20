import { Button, Checkbox, Textarea } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";
import { useState } from "react";
import fields from "../Data/Profile";
import SelectInput from "./SelectInput";


const ExInput = (props: any) => {
    const select = fields;
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());
    const [checked, setChecked] = useState(false);
    const [about, setAbout] = useState("As a Software Engineer at Google, I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency. My role involves collaborating with cross-functional teams to define project requirements, develop technical specifications, and implement robust applications using cutting-edge technologies. I actively participate in code reviews, ensuring adherence to best practices and coding standards, and contribute to the continuous improvement of the development process");

    return <div className="flex flex-col gap-3">
        <div className="text-lg font-semibold">{props.add ? "ADD" : "Edit"}  Experience</div>
        <div className="flex gap-10 [&>*]:w-1/2">
            <SelectInput {...select[0]} />
            <SelectInput {...select[1]} />
        </div>
        <SelectInput {...select[2]} />
        <Textarea withAsterisk
            label="Summary"
            autosize
            minRows={3}
            placeholder="Enter summary...."
            value={about}
            onChange={(e) => setAbout(e.currentTarget.value)}
        />
        <div className="flex gap-10 [&>*]:w-1/2">
            <MonthPickerInput withAsterisk
                maxDate={endDate || undefined}
                label="Start date"
                placeholder="Pick date"
                value={startDate}
                onChange={setStartDate}
            />
            <MonthPickerInput withAsterisk
                disabled={checked}
                minDate={startDate || undefined}
                label="End date"
                placeholder="Pick date"
                value={endDate}
                onChange={setEndDate}
            />
        </div>
        <Checkbox checked={checked} onChange={(event) => setChecked(event?.currentTarget.checked)} label="currently working here.."
        />
        <div className="flex gap-5 mt-2">
            <Button onClick={() => props.setEdit(false)} color="bright-sun.4" variant="outline">Save</Button>
            <Button onClick={() => props.setEdit(false)} color="red.8" variant="light">Cancel</Button>
        </div>
    </div>
}
export default ExInput;