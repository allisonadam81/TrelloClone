import { CheckboxInput, RadioInput, TextInput, SelectInput } from '../InputComponents/Components';

export const defaultHTMLOptions = {
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

export const formatForm = (config) => {
  return config.reduce((accumulator, current) => {
    const { type, name } = current;
    switch (type) {
      case 'text' || 'select' || 'radio': {
        accumulator[name] = '';
        return accumulator;
      }
      case 'checkbox' : {
        accumulator[name] = false;
        return accumulator;
      }
      case 'number' : {
        accumulator[name] = 0;
        return accumulator;
      }
      default : {
        throw Error(`${type} not compatible. Please put in a compatible type for ${name}`);
      }
    }
  }, {});
};


export const formChangeHandler = (setter) => {
  return (e) => {
    return setter((prevState) => {
      const { checked, name, value, type } = e.target;
      return { ...prevState, [name]: (type === 'checkbox' ? checked : value) };
    });
  };
};


/*
    TO DO
    NEED TO CHECK AND ADD FUNCTIONALITY FOR NON TEXT OPTIONS.
    BUILD OUT HTML DEFAULTS
    BUILD OUT STYLING DEFAULTS
    BUILD OUT VALIDATION
*/

export const chooseInputType = (inputConfig, form, setForm) => {
  const { HTMLOptions, id, label, name, options, type, vertical } = inputConfig;
  // const sharedProps = { HTMLOptions, id, label, name, onChange: formChangeHandler(setForm), value: form[name] };
  switch (type) {
    case 'text' : {
      return (
        <TextInput
          HTMLOptions={HTMLOptions}
          id={id || name}
          key={name}
          label={label}
          name={name}
          onChange={formChangeHandler(setForm)}
          type={type}
          value={form[name]}
          vertical={vertical}
        />
      );
    }
    case 'select' : {
      return (
        <SelectInput
          HTMLOptions={HTMLOptions}
          id={id || name}
          key={name}
          label={label}
          name={name}
          onChange={formChangeHandler(setForm)}
          options={options}
          // type={type}
          value={form[name]}
          vertical={vertical}
        />
      );
    }
    case 'radio' : {
      return (
        <RadioInput
          HTMLOptions={HTMLOptions}
          id={id || name}
          key={name}
          label={label}
          name={name}
          onChange={formChangeHandler(setForm)}
          type={type}
          value={form[name]}
          vertical={vertical}
        />
      );
    }
    case 'checkbox' : {
      return (
        <CheckboxInput
          HTMLOptions={HTMLOptions}
          id={id || name}
          key={name}
          label={label}
          name={name}
          onChange={formChangeHandler(setForm)}
          type={type}
          checked={form[name]}
          vertical={vertical}
        />
      );
    }
    default : {
      throw new Error('this does not work');
    }
  }
};
