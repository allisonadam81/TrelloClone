
import { useState } from 'react';
import { FormInput } from '../Components';
import { CheckboxInput, RadioInput, SelectInput, TextInput } from '../InputComponents/Components';
import { formatForm, formChangeHandler, chooseInputType } from './utils';

const defaultHTMLOptions = {
  button: {

  },
  checkbox: {

  },
  color: {

  },
  data: {

  },
  datetimeLocal: {

  },
  text: {

  },
  select: {

  },
  radio: {

  },
};




// defaultHTMLOptions for the inputs based on type.

export const useForm = (config, onSubmit) => {

  const [ form, setForm ] = useState(() => formatForm(config));

  const Inputs = config.map((inputConfig) => {
    const { name, label, type, id, HTMLOptions, style, vertical } = inputConfig;
    return chooseInputType(inputConfig, form, setForm);
    
    // (
    //   <FormInput
    //     HTMLOptions={HTMLOptions}
    //     id={id || name}
    //     key={name}
    //     label={label}
    //     name={name}
    //     onChange={(e) => setForm((prevState) => {
    //       return { ...prevState, [e.target.name]: e.target.value };
    //     })}
    //     type={type}
    //     value={form[name]}
    //     vertical={vertical}
    //   />
    // );
  });
    
  const resetForm = () => setForm((prevState) => {
    return Object.fromEntries(Object.keys(prevState).map((key) => [ key, '' ]));
  });
    
  const formSubmit = onSubmit(form);

  return { form, Inputs, resetForm, formSubmit };

};
