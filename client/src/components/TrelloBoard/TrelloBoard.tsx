
import { PostItCard } from '../Components';
import { BoardState, SetBoardState, PostIt } from '../../types';

type TrelloBoardProps = {
  boardState: BoardState,
  setBoardState: SetBoardState
}

export const TrelloBoard = ({ boardState, setBoardState }: TrelloBoardProps) => {

  return (
    <div>
      {boardState.map((postIt: PostIt, i: number) => (
        <PostItCard
          setBoardState={setBoardState}
          postIt={postIt}
          i={i}
        />
      ))}
    </div>
  );
};
