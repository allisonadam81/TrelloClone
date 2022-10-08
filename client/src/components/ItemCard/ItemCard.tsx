import { useId } from 'react';
import {
  SetBoardState, BoardState, PostIt, PostItChildren, 
} from '../../types';

type ItemCardProps = {
  item: string,
  postItIndex: number,
  idx: number,
  setBoardState: SetBoardState
}

export const ItemCard = ({
  postItIndex, idx, item, setBoardState, 
}: ItemCardProps) => {

  const itemCardId = useId();

  console.log(postItIndex);
  
  const handleClick = (nextPostIt: number) => {
    return (e) => {
      e.preventDefault();
      setBoardState((prevBoard: BoardState) => {
        // if I'm at the beginning or end, then treat array like circle.
        console.log('PREVBOARD', prevBoard, 'postItIndex', postItIndex, 'item', item);
        if (nextPostIt >= prevBoard.length) nextPostIt = 0;
        if (nextPostIt < 0) nextPostIt = prevBoard.length - 1;
        console.log('next!!!', nextPostIt);
        const newBoard: BoardState = [ ...prevBoard ];
        const movedItem: string[] = newBoard[postItIndex].postItChildren.splice(idx, 1);

        newBoard[nextPostIt].postItChildren.push(...movedItem);

        return newBoard;
      });
    };
  };

  return (
    <div key={`ItemCard - ${itemCardId}`}>
      <p>{item}</p>
      <button type="button" onClick={handleClick(postItIndex - 1)}>Move Left</button>
      <button type="button" onClick={handleClick(postItIndex + 1)}>Move Right</button>
    </div>
  );
};
