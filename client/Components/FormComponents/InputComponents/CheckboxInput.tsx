import React from 'react';

type Props = {
  HTMLOptions: any,
  id: string,
  label: string,
  name: string,
  onChange: () => void,
  type: 'text' | 'number',
  checked: boolean,
  vertical: boolean
}

export const CheckboxInput = ({
  id,
  label,
  name,
  onChange,
  HTMLOptions,
  type,
  checked,
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
          checked={checked}
          {...HTMLOptions}
        />
      </label>
    </div>
  );
};

