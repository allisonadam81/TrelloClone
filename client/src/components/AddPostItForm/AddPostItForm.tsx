import React, {
  useState, memo, FormEvent, ChangeEvent, 
} from 'react';
import { BoardState, SetBoardState } from '../../types';

type FormProps = {
  setBoardState: SetBoardState
}

export const AddPostItForm = memo(({ setBoardState }: FormProps) => {

  const [ header, setHeader ] = useState('');

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setBoardState((prevBoard: BoardState) => [ ...prevBoard, { header, postItChildren: [] } ]);
    setHeader('');
  };

  return (
    <div style={{
      top: '0px',
      right: '0px',
      left: '0px',
      width: '100%',
      // border: '2px solid black',
      height: '5rem',
      backgroundColor: 'lightblue',
      position: 'fixed',
    }}
    >
      <form
        style={{
          position: 'absolute', right: '0px', marginRight: '1rem', 
        }}
        onSubmit={submitHandler}
      >
        <label htmlFor="new-post-it">
          Create Post it!
          <br />
          <input
            required
            style={{
              marginRight: '.5rem', borderRadius: '1rem', padding: '.5rem', border: 'solid 1px blue', 
            }}
            type="text"
            name="newHeader"
            id="newHeader"
            value={header}
            placeholder="new post it here..."
            onChange={(e: ChangeEvent<HTMLInputElement>) => setHeader(e.target.value)}
          />
        </label>
        <button
          type="submit"
          style={{
            padding: '.5rem', borderRadius: '1rem', border: 'blue solid 1px', backgroundColor: 'lightblue', 
          }}
        >
          Create

        </button>
      </form>
    </div>
  );
});

