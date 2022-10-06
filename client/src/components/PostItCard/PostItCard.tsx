import { useId } from 'react';

import { Header, ItemCardContainer } from '../Components';
import { BoardState, SetBoardState, PostIt } from '../../types';

type PostItProps = {
  i: number,
  setBoardState: SetBoardState,
  postIt: PostIt
}

export const PostItCard = (
  {
    i, setBoardState, postIt: { header, postItChildren }, 
  }: PostItProps,
) => {

  const postItId = useId();

  return (
    <div key={`PostItId${postItId}`}>
      <Header header={header} />
      <ItemCardContainer postItChildren={postItChildren} setBoardState={setBoardState} />

    </div>
  );
};
