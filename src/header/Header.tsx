import { Avatar, Indicator } from '@mantine/core';
import { IconBell, IconBrandSwift, IconSettings } from '@tabler/icons-react';
import NavLinks from './NavLinks';
const Header = () => {
    return <div className="w-full bg-mine-shaft-950 text-white h-20 flex justify-between items-center px-10 font-['poppins']">
        <div className='flex gap-1 items-center text-bright-sun-400'>
            <IconBrandSwift stroke={2.5} className='h-10 w-10' />
            <div className='text-3xl font-semibold'>SwiftJobs</div>
        </div>
        <NavLinks />
        <div className='flex gap-3 items-center'>
            <div className='flex gap-2 items-center'>
                <div >Dhiraj</div>
                <div>
                    <Avatar src="avatar.png" alt="it's me" />
                </div>
            </div>
            <div className='bg-mine-shaft-900 p-1.5 rounded-full'>
                <IconSettings stroke={1.5} />
            </div>
            <div className='bg-mine-shaft-900 p-1.5 rounded-full'>
                <Indicator color='bright-sun.4' size={8} offset={6} processing>
                    <IconBell size={25} stroke={1.5} />
                </Indicator>
            </div>


        </div>
    </div>
}

export default Header;