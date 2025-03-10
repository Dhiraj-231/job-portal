import { NavLink } from "react-router-dom";

const NavLinks = () => {
    const links = [
        { name: "Find Jobs", url: '/find-jobs' },
        { name: "Find Talents", url: '/find-talents' },
        { name: "Post Jobs", url: '/post-jobs' },
        { name: "Posted Job", url: '/posted-job' },
        { name: "Job History", url: '/job-history' },
    ]
    return (
        <div className='flex gap-5 text-mine-shaft-300 h-full items-center'>
            {links.map((link, index) => (
                <NavLink
                    key={index}
                    to={link.url}
                    className={({ isActive }) =>
                        `border-t-[3px] h-full flex items-center ${isActive ? "border-bright-sun-400 text-bright-sun-400" : "border-transparent"}`
                    }
                >
                    {link.name}
                </NavLink>
            ))}
        </div >
    );
}

export default NavLinks;