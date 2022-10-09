import { useState, memo, FormEvent } from 'react';
import { SetBoardState } from '../../types';

type AddItemFormProps = {
  postItIndex: number,
  setBoardState: SetBoardState
}

export const AddItemForm = memo(({ postItIndex, setBoardState }: AddItemFormProps) => {

  const [ newItem, setNewItem ] = useState('');

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setBoardState((prevBoard) => {
      const newBoard = JSON.parse(JSON.stringify(prevBoard));
      newBoard[postItIndex].postItChildren.push(newItem);
      return newBoard;
    });
    setNewItem('');
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
      >
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="addItemInput">Add Item!</label>
        <input
          required
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
          name="addItemInput"
          id="addItemInput"
          placeholder="add item here"
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
});


