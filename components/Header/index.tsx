import { FiHeart, FiBell } from 'react-icons/fi';
import { AiOutlineEye } from 'react-icons/ai';
import IconSelect from '../IconSelect';

const Header = (): JSX.Element => {
  return (
    <div className="flex w-full p-1 bg-indigo-200 ">
      <IconSelect>
        <FiHeart />
      </IconSelect>
      <IconSelect>
        <AiOutlineEye />
      </IconSelect>
      <IconSelect>
        <FiBell />
      </IconSelect>
    </div>
  );
};

export default Header;
