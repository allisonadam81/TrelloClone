
import { PostItCard } from '../Components';
import { BoardState, SetBoardState, PostIt } from '../../types';

type TrelloBoardProps = {
  boardState: BoardState,
  setBoardState: SetBoardState
}

export const TrelloBoard = ({ boardState, setBoardState }: TrelloBoardProps) => {

  return (
    <div style={{ display: 'flex', border: 'solid 2px black' }}>
      {boardState.map((postIt: PostIt, postItIndex: number) => (
        <PostItCard
          setBoardState={setBoardState}
          postIt={postIt}
          postItIndex={postItIndex}
        />
      ))}
    </div>
  );
};
