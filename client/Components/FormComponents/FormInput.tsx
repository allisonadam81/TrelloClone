
type FormInputProps = {
  id: string,
  label: string,
  name: string,
  onChange: () => void,
  placeholder: string,
  type: string,
  value: string,
  // eslint-disable-next-line react/require-default-props
  vertical?: boolean,
}

const style = {
  marginRight: '.5rem',
  borderRadius: '4px',
  padding: '.3rem',
  border: 'solid 1px blue',
  textIndent: '2px',
};

export const FormInput = ({
  id,
  label,
  name,
  onChange,
  placeholder,
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
        placeholder={placeholder}
        type={type}
        value={value}
        style={style}
      />
    </>
  );
};
