import { NavLink } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
  address: string;
  icon: React.ReactNode;
}

function SidebarNavItem({ children, address, icon }: Props) {
  return (
    <NavLink
      to={address}
      className="flex items-center justify-start gap-4 rounded p-2 hover:bg-gray-100"
    >
      {icon}
      <p className="text-xl">{children}</p>
    </NavLink>
  );
}

export default SidebarNavItem;
