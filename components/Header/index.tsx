import { FiHeart, FiBell } from 'react-icons/fi';
import { AiOutlineEye } from 'react-icons/ai';

import IconSelect from '../IconSelect';
import { isMobile } from '../../utils/globals';

const Header = (): JSX.Element => {
  console.log('isMobile', isMobile);
  return (
    <header>
      <nav>
        <ul className="flex w-full p-1 bg-indigo-200">
          <IconSelect>
            <FiHeart />
          </IconSelect>
          <IconSelect>
            <AiOutlineEye />
          </IconSelect>
          <IconSelect>
            <FiBell />
          </IconSelect>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
