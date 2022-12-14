import { useId, memo } from 'react';

import { Header, ItemCardContainer, AddItemForm } from '../Components';
import { SetBoardState, PostIt } from '../../types';

type PostItProps = {
  postItIndex: number,
  setBoardState: SetBoardState,
  postIt: PostIt
}

export const PostItCard = memo((
  {
    postItIndex, setBoardState, postIt: { header, postItChildren }, 
  }: PostItProps,
) => {

  const postItId = useId();

  return (
    <div key={`PostItId${postItId}`}>
      <Header header={header} />
      <ItemCardContainer
        postItIndex={postItIndex}
        postItChildren={postItChildren}
        setBoardState={setBoardState}
      />
      <AddItemForm postItIndex={postItIndex} setBoardState={setBoardState} />
    </div>
  );
});
