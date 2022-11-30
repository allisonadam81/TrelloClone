import React from 'react';
import { SetBoardState, BoardState } from '../../types';

type ItemCardProps = {
  item: string,
  postItIndex: number,
  itemIndex: number,
  setBoardState: SetBoardState
}

export const ItemCard = ({
  postItIndex, itemIndex, item, setBoardState, 
}: ItemCardProps) => {
  const handleClick = (nextPostIt: number) => {
    return (e) => {
      e.preventDefault();
      setBoardState((prevBoard: BoardState) => {
        // if I'm at the beginning or end, then treat array like circle.
        if (nextPostIt >= prevBoard.length) nextPostIt = 0;
        if (nextPostIt < 0) nextPostIt = prevBoard.length - 1;

        const newBoard: BoardState = JSON.parse(JSON.stringify(prevBoard));
        const movedItem: string[] = newBoard[postItIndex].postItChildren.splice(itemIndex, 1);

        newBoard[nextPostIt].postItChildren.push(...movedItem);

        return newBoard;
      });
    };
  };


  return (
    <div style={{ border: 'solid 2px lightblue', padding: '.5rem', margin: '.5rem' }}>
      <p>{item}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button type="button" onClick={handleClick(postItIndex - 1)}>Move Left</button>
        <button type="button" onClick={handleClick(postItIndex + 1)}>Move Right</button>
      </div>
    </div>
  // <div style={{ border: 'solid 2px lightblue', padding: '.5rem', margin: '.5rem' }}>
  //   <p>{item}</p>
  //   <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  //     <button type="button" onClick={handleClick(postItIndex + 1)}>Submit</button>
  //   </div>
  // </div>
  );
};
