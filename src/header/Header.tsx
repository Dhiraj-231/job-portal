import { Avatar, Indicator } from '@mantine/core';
import { IconBell, IconBrandSwift, IconSettings } from '@tabler/icons-react';
import NavLinks from './NavLinks';
import { useLocation, useNavigate } from 'react-router-dom';
import ProfileMenu from './ProfileMenu';
const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return location.pathname !== '/sign-up' && location.pathname !== '/login' ? <div className="w-full bg-mine-shaft-950 text-white h-20 flex justify-between items-center px-10 font-['poppins']">
        <div className='flex gap-1 items-center text-bright-sun-400 cursor-pointer' onClick={() => navigate('/')} >
            <IconBrandSwift stroke={2.5} className='h-10 w-10' />
            <div className='text-3xl font-semibold'>SwiftJobs</div>
        </div>
        <NavLinks />
        <div className='flex gap-3 items-center'>
            
            <ProfileMenu />
            <div className='bg-mine-shaft-900 p-1.5 rounded-full'>
                <IconSettings stroke={1.5} />
            </div>
            <div className='bg-mine-shaft-900 p-1.5 rounded-full'>
                <Indicator color='bright-sun.4' size={8} offset={6} processing>
                    <IconBell size={25} stroke={1.5} />
                </Indicator>
            </div>


        </div>
    </div> : <></>
}

export default Header;