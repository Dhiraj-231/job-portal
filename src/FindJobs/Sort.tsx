import { ActionIcon, Combobox, useCombobox } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';
import { useState } from 'react';

const opt = ['Relevance', 'Most Recent', 'Salary (Low to High )', 'Salary (High to Low)'];

const Sort = () => {
    const [selectedItem, setSelectedItem] = useState<string | null>('Relevance');
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });

    const options = opt.map((item) => (
        <Combobox.Option className='!text-xs' value={item} key={item}>
            {item}
        </Combobox.Option>
    ));

    return (
        <>
            <Combobox
                store={combobox}
                width={150}
                position="bottom-start"
                onOptionSubmit={(val) => {
                    setSelectedItem(val);
                    combobox.closeDropdown();
                }}
            >
                <Combobox.Target>

                    <div onClick={() => combobox.toggleDropdown()} className='border border-bright-sun-400 text-sm flex px-2 py-1 rounded-xl items-center cursor-pointer gap-1'>
                        {selectedItem}<ActionIcon color='bright-sun.4' variant='transparent' aria-label='Settings'> <IconAdjustments className="h-5 w-5 text-bright-sun-400" stroke={2} /> </ActionIcon>
                    </div>
                </Combobox.Target>

                <Combobox.Dropdown>
                    <Combobox.Options>{options}</Combobox.Options>
                </Combobox.Dropdown>
            </Combobox>
        </>
    );
}

export default Sort;