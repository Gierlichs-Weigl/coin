import { FunctionComponent, ReactNode } from 'react';

type SelectProps = {
  children: ReactNode;
  className?: string;
};

const IconSelect: FunctionComponent<SelectProps> = ({ children, className }) => {
  return <li className={`${className} p-4 border border-gray-500`}>{children}</li>;
};

export default IconSelect;
