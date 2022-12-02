import { useId, FormEvent } from 'react';
import { Form, HeadingText } from '../../Components/Components';

import { ItemCardContainer } from '../ProprietaryComponents';

import { newItemConfig } from './utils';

import { SetBoardState, PostIt } from '../types';

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

  const submitHandler = (form) => {
    return (e: FormEvent) => {
      e.preventDefault();
      setBoardState((prevBoard) => {
        const newBoard = JSON.parse(JSON.stringify(prevBoard));
        newBoard[postItIndex].postItChildren.push(form.newItemTitle);
        return newBoard;
      });
    };
  };

  const postItId = useId();
  
  return (
    <div key={`PostItId${postItId}`} style={{ border: 'solid 2px black', padding: '1rem' }}>
      <HeadingText key={`Header-${postItId}`} headingText={header} size="medium" />
      <ItemCardContainer
        postItIndex={postItIndex}
        postItChildren={postItChildren}
        setBoardState={setBoardState}
      />
      <Form key="Add Item Form" onSubmit={submitHandler} config={newItemConfig} />
      {/* <AddItemForm key={`AddItemForm-${postItId}`} postItIndex={postItIndex} setBoardState={setBoardState} /> */}
    </div>
  );
};
