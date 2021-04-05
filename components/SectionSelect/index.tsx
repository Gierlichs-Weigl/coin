import { FiHeart, FiBell } from 'react-icons/fi';
import { AiOutlineEye } from 'react-icons/ai';

import IconSelect from '../IconSelect';

const SectionSelect = (): JSX.Element => {
  return (
    <>
      <IconSelect>
        <FiHeart />
      </IconSelect>
      <IconSelect>
        <AiOutlineEye />
      </IconSelect>
      <IconSelect>
        <FiBell />
      </IconSelect>
    </>
  );
};

export default SectionSelect;
