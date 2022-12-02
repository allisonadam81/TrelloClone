import { useId } from 'react';
import { ItemCard } from '../ProprietaryComponents';
import { SetBoardState, PostItChildren } from '../../types';

type ItemCardContainerProps = {
  postItIndex: number,
  setBoardState: SetBoardState,
  postItChildren: PostItChildren
}

export const ItemCardContainer = ({
  postItIndex, postItChildren, setBoardState,
}: ItemCardContainerProps) => {
  const itemContainerId = useId();

  return (
    <div>
      {postItChildren.map((item: string, itemIndex: number) => (
        <ItemCard
          // eslint-disable-next-line react/no-array-index-key
          key={`itemCard${itemIndex} - ${itemContainerId}`}
          itemIndex={itemIndex}
          item={item}
          postItIndex={postItIndex}
          setBoardState={setBoardState}
        />
      ))}
    </div>
  );
};

