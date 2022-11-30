import { useId, memo } from 'react';

import { Header, ItemCardContainer, AddItemForm } from '../Components';
import { SetBoardState, PostIt } from '../../types';

type PostItProps = {
  postItIndex: number,
  setBoardState: SetBoardState,
  postIt: PostIt
}

export const PostItCard = (
  {
    postItIndex, setBoardState, postIt: { header, postItChildren }, 
  }: PostItProps,
) => {
  // console.log('post it card rendered ', postItIndex, postItChildren);
  const postItId = useId();
  
  return (
    <div key={`PostItId${postItId}`} style={{ border: 'solid 2px black', padding: '1rem' }}>
      <Header header={header} key={`Header-${postItId}`} />
      <ItemCardContainer
        postItIndex={postItIndex}
        postItChildren={postItChildren}
        setBoardState={setBoardState}
      />
      <AddItemForm key={`AddItemForm-${postItId}`} postItIndex={postItIndex} setBoardState={setBoardState} />
    </div>
  );
};
