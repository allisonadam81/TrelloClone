
import { useState } from 'react';
import { formatForm, chooseInputType } from './utils';

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


export const useForm = (config, onSubmit) => {

  const [ form, setForm ] = useState(() => formatForm(config));

  const Inputs = config.map((inputConfig) => {
    return chooseInputType(inputConfig, form, setForm);
  });
    
  const resetForm = () => setForm(formatForm(config));
    
  const formSubmit = onSubmit(form);

  return { form, Inputs, resetForm, formSubmit };

};
