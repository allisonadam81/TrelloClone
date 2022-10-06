import { ItemCard } from '../Components';

import { SetBoardState, PostItChildren } from '../../types';

type ItemCardContainerProps = {
  i: number,
  setBoardState: SetBoardState,
  postItChildren: PostItChildren
}

export const ItemCardContainer = ({
  i, postItChildren, setBoardState,
}: ItemCardContainerProps) => {
  return (
    <div>
      {postItChildren.map((item: string, idx: number) => (
        <ItemCard idx={idx} item={item} i={i} setBoardState={setBoardState} />
      ))}
    </div>
  );
};

