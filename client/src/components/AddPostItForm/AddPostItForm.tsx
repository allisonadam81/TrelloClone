import { useState, FormEvent } from 'react';
import { BoardState, SetBoardState } from '../../types';
import * as styles from './PostItForm.module.css';

type FormProps = {
  setBoardState: SetBoardState
}

export const AddPostItForm = ({ setBoardState }: FormProps) => {

  const [ header, setHeader ] = useState('');

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
      justifyContent: 'flex-end',
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
      <form
        style={{
          marginRight: '1rem', 
        }}
        onSubmit={submitHandler}
      >
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="newHeader">Create Post it! </label>
        <input
          required
          style={{
            marginRight: '.5rem', borderRadius: '4px', padding: '.3rem', border: 'solid 1px blue', textIndent: '2px',
          }}
          type="text"
          name="newHeader"
          id="newHeader"
          value={header}
          placeholder="new post it here..."
          onChange={(e) => setHeader(e.target.value)}
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

