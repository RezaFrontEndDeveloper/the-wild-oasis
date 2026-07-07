import { FaUser } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

import Button from '../atoms/Button';
import Capstion from '../atoms/Capstion';
import DarkModeButton from '../molecules/DarkModeButton';

function Header() {
  return (
    <div className="flex items-center justify-end gap-8 border-b-1 border-gray-100 p-10">
      <Capstion>X name</Capstion>
      <div className="flex items-center gap-4">
        <Button variant="logo">
          <FaUser className="cursor-pointer" size={20} />
        </Button>

        <DarkModeButton />

        <Button variant="logo">
          <FiLogOut className="cursor-pointer" size={20} />
        </Button>
      </div>
    </div>
  );
}

export default Header;
