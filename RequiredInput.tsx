
// type RequiredInputProps = {
//   id: string,
//   name: string,
//   labelText: string,
//   placeholder: string,
//   style: object,
//   type: string,
//   value: string | number,
//   vertical: string,
  
//   onChange: () => void,
// }

type RequiredInputProps = any;

export const RequiredInput = ({
  inputProps, labelText, vertical,
}: RequiredInputProps) => {
  const { name } = inputProps;
  return (
    <>
      <label htmlFor={name}>{labelText}</label>
      {vertical ? <br /> : null}
      <input
        {...inputProps}
      />
    </>
  );
};
