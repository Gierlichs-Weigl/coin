import { FunctionComponent, ReactNode } from 'react';

type SelectProps = {
  children: ReactNode;
  className?: string;
};

const IconSelect: FunctionComponent<SelectProps> = ({ children, className }) => {
  return <div className={`${className} p-4 border border-gray-500`}>{children}</div>;
};

export default IconSelect;
