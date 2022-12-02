import { FormEvent } from 'react';

import { Form, HeadingText } from '../../Components/Components';
import { addPostItFormConfig } from './utils';

import { SetBoardState, BoardState } from '../types';

type HeaderProps = {
  setBoardState: SetBoardState
}

const style = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  top: '0px',
  right: '0px',
  left: '0px',
  width: '100%',
  height: '5rem',
  backgroundColor: 'lightblue',
  position: 'relative',
};

export const TrelloHeader = ({ setBoardState }: HeaderProps) => {
  
  const headingText = 'What a fine Trello Clone!';

  const handleFormSubmit = (form) => {
    return (e: FormEvent) => setBoardState((prevBoard: BoardState) => {
      e.preventDefault();
      return [ ...JSON.parse(JSON.stringify(prevBoard)), { header: form.newPostItTitle, postItChildren: [] } ];
    });
  };

  return (
    <header style={style}>
      <HeadingText headingText={headingText} size="large" />
      <Form
        key="Add Post It Form"
        config={addPostItFormConfig}
        onSubmit={handleFormSubmit} 
      />
    </header>
  );
};

