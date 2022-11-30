import { useState, FormEvent } from 'react';

import { RequiredInput } from '../Components';
import { BoardState, SetBoardState } from '../../types';
import * as styles from './PostItForm.module.css';

type FormProps = {
  setBoardState: SetBoardState
}


export const AddPostItForm = ({ setBoardState }: FormProps) => {
  const [ header, setHeader ] = useState('');
  
  const inputProps = {
    id: 'newHeader',
    name: 'newHeader',
    onChange: (e) => setHeader(e.target.value),
    placeholder: 'new post it here...',
    type: 'text',
    value: header,
    style: {
      marginRight: '.5rem', borderRadius: '4px', padding: '.3rem', border: 'solid 1px blue', textIndent: '2px',
    },
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setBoardState((prevBoard: BoardState) => (
      [ ...JSON.parse(JSON.stringify(prevBoard)), { header, postItChildren: [] } ]));
    setHeader('');
  };

  return (
    <header style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      top: '0px',
      right: '0px',
      left: '0px',
      width: '100%',
      // border: '2px solid black',
      height: '5rem',
      backgroundColor: 'lightblue',
      position: 'relative',
    }}
    >
      <h1>A Very Nice Trello Clone.</h1>
      <form
        style={{
          marginRight: '1rem', 
        }}
        onSubmit={submitHandler}
      >
        <RequiredInput
          inputProps={inputProps}
          labelText="Create Post It!"
          vertical
          style={{
            marginRight: '.5rem', borderRadius: '4px', padding: '.3rem', border: 'solid 1px blue', textIndent: '2px',
          }}
        />
        <button
          type="submit"
          style={{
            ...styles.button, 
          }}
        >
          Create
        </button>
      </form>
    </header>
  );
};

