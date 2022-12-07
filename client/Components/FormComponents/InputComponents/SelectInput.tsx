import React from 'react';

type OptionType = {
  label: string,
  value: string,
  HTMLOptions: any,
}

type Props = {
  HTMLOptions: any,
  id: string,
  label: string,
  name: string,
  onChange: () => void,
  options: OptionType[],
  value: string,
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
        {label || `${name[0].toUpperCase()}${name.slice}:`}
        {vertical ? <br /> : null}
        <select id={id} name={name} onChange={onChange} onBlur={onChange} value={value} {...HTMLOptions}>
          {options.map((option, i) => {
            return (
              <option
                key={`${name} - ${option.value}`}
                label={option.label}
                value={option.value}
                {...option.HTMLOptions}
              />
            );
          })}
        </select>
      </label>
    </div>
  );
};
