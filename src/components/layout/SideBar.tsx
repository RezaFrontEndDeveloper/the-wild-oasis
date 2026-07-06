import { HiUsers } from 'react-icons/hi';
import { IoHomeOutline, IoSettingsOutline } from 'react-icons/io5';
import { MdHouseSiding } from 'react-icons/md';
import { TbBrandBooking } from 'react-icons/tb';

import Logo from '../atoms/Logo';
import SidebarNavItem from '../molecules/SidebarNavItem';

function SideBar() {
  return (
    <div className="flex h-screen w-62.5 flex-col gap-8 border border-gray-200 p-4">
      <Logo />
      <div className="flex flex-col gap-4">
        <SidebarNavItem address="/" icon={<IoHomeOutline size={20} />}>
          Home
        </SidebarNavItem>

        <SidebarNavItem address="/booking" icon={<TbBrandBooking size={20} />}>
          Booking
        </SidebarNavItem>

        <SidebarNavItem address="/cabins" icon={<MdHouseSiding size={20} />}>
          Cabins
        </SidebarNavItem>

        <SidebarNavItem address="/users" icon={<HiUsers size={20} />}>
          Users
        </SidebarNavItem>

        <SidebarNavItem address="/setting" icon={<IoSettingsOutline size={20} />}>
          Setting
        </SidebarNavItem>
      </div>
    </div>
  );
}

export default SideBar;
