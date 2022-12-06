import { CheckboxInput, RadioInput, SelectInput, TextInput } from './InputComponents/Components';



type FormInputProps = {
  HTMLOptions: any,
  id: string,
  label: string,
  name: string,
  onChange: () => void,
  // eslint-disable-next-line react/require-default-props
  options?: string[],
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

export const FormInput = (props: FormInputProps) => {

  const { type } = props;
  
  const obj = {
    checkbox: <CheckboxInput {...props} />,
    text: <TextInput {...props} />,
    radio: <RadioInput {...props} />,
    select: <SelectInput {...props} />,
  };
  
  return (
    <div>
      {obj[type]}
    </div>
  );
};
