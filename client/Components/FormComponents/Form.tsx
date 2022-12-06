/* eslint-disable jsx-a11y/control-has-associated-label */

import { useForm } from './Components';

type FormProps = {
  config: any[],
  onSubmit: () => void
}

export const Form = ({ config, onSubmit }: FormProps) => {

  // eslint-disable-next-line no-unused-vars
  const { form, Inputs, resetForm, formSubmit } = useForm(config, onSubmit);

  return (
    <div style={{ margin: '1em' }}>
      <form 
        // style={{ border: '2px solid black' }}
        onSubmit={(e) => {
          formSubmit(e);
          resetForm();
        }}
      >
        {Inputs}
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
};
