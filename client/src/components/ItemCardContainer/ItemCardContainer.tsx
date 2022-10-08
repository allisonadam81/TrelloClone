import { ItemCard } from '../Components';

import { SetBoardState, PostItChildren } from '../../types';

type ItemCardContainerProps = {
  postItIndex: number,
  setBoardState: SetBoardState,
  postItChildren: PostItChildren
}

export const ItemCardContainer = ({
  postItIndex, postItChildren, setBoardState,
}: ItemCardContainerProps) => {
  return (
    <div>
      {postItChildren.map((item: string, idx: number) => (
        <ItemCard idx={idx} item={item} postItIndex={postItIndex} setBoardState={setBoardState} />
      ))}
    </div>
  );
};

