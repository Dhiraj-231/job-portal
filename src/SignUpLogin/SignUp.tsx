import { Anchor, Button, Checkbox, PasswordInput, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
            <div className="text-2xl font-semibold">Create Account</div>
            <TextInput withAsterisk label="Full Name " placeholder=" Your name" />
            <TextInput withAsterisk leftSection={<IconAt />} label=" Email" placeholder="Your email"
            />
            <PasswordInput leftSection={<IconLock />} label="Password" withAsterisk placeholder="New Password" />
            <PasswordInput leftSection={<IconLock />} label="Confirm password" withAsterisk placeholder="Confirm Password" />
            <Checkbox autoContrast label={<>I accept {''} <Anchor>terms & conditions</Anchor></>} />
            <Button autoContrast variant="filled">Sign up</Button>
            <div className="mx-auto">Have an account ? <Link className="text-bright-sun-400 hover:underline" to="/login">login</Link></div>
        </div>
    )
}
export default SignUp;