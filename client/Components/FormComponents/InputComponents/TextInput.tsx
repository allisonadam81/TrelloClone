import React from 'react';

type Props = {
  HTMLOptions: any,
  id: string,
  label: string,
  name: string,
  onChange: () => void,
  type: 'text' | 'number',
  value: string | number,
  vertical: boolean
}

export const TextInput = ({
  id,
  label,
  name,
  onChange,
  HTMLOptions,
  type,
  value,
  vertical,
}: Props) => {
  return (
    <div>
      <label htmlFor={name}>
        {label || `${name[0].toUpperCase()}${name.slice}:`}
        {vertical ? <br /> : null}
        <input
          id={id}
          name={name}
          onChange={onChange}
          type={type}
          value={value}
          {...HTMLOptions}
        />
      </label>
    </div>
  );
};
