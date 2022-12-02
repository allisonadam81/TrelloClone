
type FormInputProps = {
  HTMLOptions: any,
  id: string,
  label: string,
  name: string,
  onChange: () => void,
  placeholder: string,
  type: string,
  value: string,
  vertical: boolean,
}

const style = {
  margin: '.5em',
  borderRadius: '4px',
  padding: '.3rem',
  border: 'solid 1px blue',
  textIndent: '2px',
};

export const FormInput = ({
  HTMLOptions,
  id,
  label,
  name,
  onChange,
  type,
  value,
  vertical,
}: FormInputProps) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      {vertical ? <br /> : null}
      <input
        id={id}
        name={name}
        onChange={onChange}
        type={type}
        value={value}
        style={style}
        {...HTMLOptions}
      />
    </>
  );
};
