import { Button, PasswordInput, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
            <div className="text-2xl font-semibold">Create Account</div>
            <TextInput withAsterisk leftSection={<IconAt />} label=" Email" placeholder="Your email"
            />
            <PasswordInput leftSection={<IconLock />} label="Password" withAsterisk placeholder="New Password" />
            <Button autoContrast variant="filled">Login</Button>
            <div className="mx-auto"> Don't have an account ? <Link className="text-bright-sun-400 hover:underline" to="/sign-up">Signup</Link></div>
        </div>
    )
}

export default Login;