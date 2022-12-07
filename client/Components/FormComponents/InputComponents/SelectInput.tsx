import React from 'react';

type OptionType = {
  label: string,
  value: string
}

type Props = {
  HTMLOptions: any,
  id: string,
  label: string,
  name: string,
  onChange: () => void,
  options: OptionType[],
  type: 'text' | 'number',
  value: string | number,
  vertical: boolean
}

export const SelectInput = ({
  id,
  label,
  name,
  onChange,
  options,
  HTMLOptions,
  value,
  vertical,
}: Props) => {
  return (
    <div>
      <label htmlFor={name}>
        {label}
        {vertical ? <br /> : null}
        <select id={id} name={name} onChange={onChange} onBlur={onChange} value={value} {...HTMLOptions}>
          <option key="invalid" value="">-- please choose an option --</option>
          {options.map((option, i) => {
            return (
              <option
                key={`${name} - ${option.value}`}
                label={option.label}
                value={option.value}
              />
            );
          })}
        </select>
      </label>
    </div>
  );
};
