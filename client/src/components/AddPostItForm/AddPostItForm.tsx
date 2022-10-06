import React, { useState, memo, FormEvent } from 'react';
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
    <div>
      <form
        onSubmit={submitHandler}
      >
        <label htmlFor="new-post-it">
          Create Post it!
          <input
            type="text"
            name="newHeader"
            id="newHeader"
            value={header}
            placeholder="new post it here..."
            onChange={(event) => setHeader(event.target.value)}
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
});

