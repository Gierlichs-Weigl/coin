import React, { FC } from 'react';

type Props = {
  type: string;
  label: string;
  id?: string;
  placeholder?: string;
  error?: boolean;
};

const Input: FC<Props> = ({ type, id, label, placeholder, error }) => {
  return (
    <div className="flex flex-col text-gray-500">
      <label htmlFor="input" className="pl-2">
        {label}
      </label>
      <input
        id={id}
        name="input"
        className={`border border-gray-400 appearance-none rounded px-3 py-2 focus focus:border-gray-600 focus:outline-none active:outline-none active:border-gray-600 ${
          error ? 'border-red-500 ' : ''
        }`}
        type={type}
        placeholder={placeholder}
      />
      {error ? <span className="pl-2 text-red-500 text-sm">{error}</span> : null}
    </div>
  );
};

export default Input;
