/* eslint-disable jsx-a11y/control-has-associated-label */

import { useForm } from './useForm';

type FormProps = {
  config: any[],
  onSubmit: (form: any) => void
}

export const Form = ({ config, onSubmit }: FormProps) => {

  const { form, Inputs, resetForm, formSubmit } = useForm(config, onSubmit);

  return (
    <div>
      <form onSubmit={(e) => {
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
