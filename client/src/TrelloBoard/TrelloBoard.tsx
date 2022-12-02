import { PostItCard } from '../ProprietaryComponents';
import { BoardState, SetBoardState, PostIt } from '../types';

type TrelloBoardProps = {
  boardState: BoardState,
  setBoardState: SetBoardState
}

export const TrelloBoard = ({ boardState, setBoardState }: TrelloBoardProps) => {
  console.log('BOARD STATE ', boardState);
  return (
    <div style={{ display: 'flex', border: 'solid 2px black' }}>
      {boardState.map((postIt: PostIt, postItIndex: number) => (
        <PostItCard
          // eslint-disable-next-line react/no-array-index-key
          key={`postItCard-${postItIndex}`}
          setBoardState={setBoardState}
          postIt={postIt}
          postItIndex={postItIndex}
        />
      ))}
    </div>
  );
};
