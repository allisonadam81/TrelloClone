
import { useState } from 'react';
import { FormInput } from './Components';

// const addPostItFormConfig = [ { name: 'Add Post It', type: 'text', label: 'Add Post It!' } ];

//           required
// onChange={(e) => setNewItem(e.target.value)}
// value={newItem}
// name="addItemInput"
// id="addItemInput"
// placeholder="add item here"

/*
  // const inputProps = {
  //   id: 'newHeader',
  //   name: 'newHeader',
  //   onChange: (e) => setHeader(e.target.value),
  //   placeholder: 'new post it here...',
  //   type: 'text',
  //   value: header,
  //   style: {
  //     marginRight: '.5rem',
  //     borderRadius: '4px', padding: '.3rem', border: 'solid 1px blue', textIndent: '2px',
  //   },
  // };
*/

const formatForm = (config) => {
  return config.reduce((accumulator, current) => {
    accumulator[current.name] = '';
    return accumulator;
  }, {});
};

export const useForm = (config, onSubmit) => {

  const [ form, setForm ] = useState(() => formatForm(config));

  const formSubmit = onSubmit(form);
  
  const Inputs = config.map((inputConfig) => {
    const { name, label, type } = inputConfig;
    return (
      <FormInput
        id={name}
        key={name}
        label={label}
        name={name}
        onChange={(e) => setForm((prevState) => {
          return { ...prevState, [e.target.name]: e.target.value };
        })}
        // placeholder={`${name}...`}
        type={type}
        value={form[name]}
      />
    );
  });

  const resetForm = () => setForm((prevState) => {
    return Object.fromEntries(Object.keys(prevState).map((key) => [ key, '' ]));
  });

  return { form, Inputs, resetForm, formSubmit };

};
