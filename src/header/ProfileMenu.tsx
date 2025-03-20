import { Avatar, Menu, Switch } from '@mantine/core';
import {
    IconArrowsLeftRight,
    IconFileText,
    IconLogout2,
    IconMessageCircle,
    IconMoon,
    IconMoonStars,
    IconSun,
    IconTrash,
    IconUserCircle
} from '@tabler/icons-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileMenu = () => {
    const navigate = useNavigate();
    const [checked, setChecked] = useState(false);
    const [opened, setOpened] = useState(false);
    return (
        <Menu shadow="md" width={200} opened={opened} onChange={setOpened}>
            <Menu.Target>
                <div className='flex gap-2 items-center cursor-pointer'>
                    <div >Dhiraj</div>
                    <div>
                        <Avatar src="avatar.png" alt="it's me" />
                    </div>
                </div>
            </Menu.Target>

            <Menu.Dropdown onChange={() => setOpened(true)}>
                <Menu.Item onClick={() => navigate('/profile')} leftSection={<IconUserCircle size={14} />}>
                    Profile
                </Menu.Item>
                <Menu.Item leftSection={<IconMessageCircle size={14} />}>
                    Messages
                </Menu.Item>
                <Menu.Item leftSection={<IconFileText size={14} />}>
                    Resume
                </Menu.Item>
                <Menu.Item
                    leftSection={<IconMoon size={14} />}
                    rightSection={
                        <Switch checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)}
                            size="md"
                            color="dark.4"
                            onLabel={<IconSun size={16} stroke={2.5} color="var(--mantine-color-yellow-4)" />}
                            offLabel={<IconMoonStars size={16} stroke={2.5} color="var(--mantine-color-blue-6)" />}
                        />
                    }
                >
                    Dark Mode
                </Menu.Item>

                <Menu.Divider />
                <Menu.Item
                    color="red"
                    leftSection={<IconLogout2 size={14} />}
                >
                    Logout
                </Menu.Item>
            </Menu.Dropdown>
        </Menu >
    );
}

export default ProfileMenu;