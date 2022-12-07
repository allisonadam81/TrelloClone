export const formConfig = [
  {
    name: 'my text input',
    type: 'text',
    id: 'text input id',
    label: 'text input',
    vertical: true,
    HTMLOptions: {
      placeholder: 'please put text here...',
    },
  },
  {
    name: 'my select input',
    type: 'select',
    id: 'select input id',
    label: 'select input',
    options: [
      { label: '-- please choose --', value: '', HTMLOptions: { disabled: true } },
      { label: 'Cali', value: 'California' },
      { label: 'Tenn', value: 'Tennessee' },
      { value: 'Please not this one!' },
    ],
    vertical: false,
    HTMLOptions: {
      
    },
  },
];
