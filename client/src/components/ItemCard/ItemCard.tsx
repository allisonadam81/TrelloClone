import { useId } from 'react';
import {
  SetBoardState, BoardState, PostIt, PostItChildren, 
} from '../../types';

type ItemCardProps = {
  item: string,
  i: number,
  idx: number,
  setBoardState: SetBoardState
}

export const ItemCard = ({
  i, idx, item, setBoardState, 
}: ItemCardProps) => {

  const itemCardId = useId();

  const handleClick = (nextPostIt: number) => {
    return (e) => {
      e.preventDefault();
      setBoardState((prevBoard: BoardState) => {
        // if I'm at the beginning or end, then treat array like circle.

        if (nextPostIt === prevBoard.length) nextPostIt = 0;
        if (nextPostIt < 0) nextPostIt = prevBoard.length - 1;

        const newBoard: BoardState = [ ...prevBoard ];
        const movedItem: string[] = newBoard[i].postItChildren.splice(idx, 1);

        newBoard[nextPostIt].postItChildren.push(...movedItem);

        return newBoard;
      });
    };
  };

  return (
    <div key={`ItemCard - ${itemCardId}`}>
      <p>{item}</p>
      <button type="button" onClick={handleClick(i + 1)}>Move Right</button>
      <button type="button" onClick={handleClick(i - 1)}>Move Left</button>
    </div>
  );
};
