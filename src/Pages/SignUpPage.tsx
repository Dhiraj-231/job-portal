import { IconBrandSwift } from "@tabler/icons-react";
import SignUp from "../SignUpLogin/SignUp";
import Login from "../SignUpLogin/Login";
import { useLocation } from "react-router-dom";

const SignUpPage = () => {
    const location = useLocation();
    console.log("Current Location :- " + location.pathname);
    return <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] overflow-hidden">
        <div className={`w-[100vw] h-[100vh] transition-all duration-1000 ease-in-out flex [&>*]:flex-shrink-0 ${location.pathname == '/sign-up' ? '-translate-x-1/2' : 'translate-x-0'}`}>
            <Login />
            <div className={`w-1/2 transition-all duration-1000 ease-in-out h-full ${location.pathname === '/sign-up' ? ' rounded-r-[100px]' : ''} ${location.pathname === '/login' ? ' rounded-l-[100px]' : ''}  bg-mine-shaft-900 flex items-center justify-center flex-col gap-4`}>
                <div className='flex gap-1 items-center text-bright-sun-400 cursor-pointer'  >
                    <IconBrandSwift stroke={2.5} className='h-16 w-16' />
                    <div className='text-6xl font-semibold'>SwiftJobs</div>
                </div>
                <div className="text-2xl text-mine-shaft-300 font-semibold">Find the job made for you!</div>
            </div>
            <SignUp />
        </div>

    </div >
}
export default SignUpPage;