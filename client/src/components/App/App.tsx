import { useState } from 'react';
import { AddPostItForm, TrelloBoard } from '../Components';
import { BoardState } from '../../types';

export const App = () => {

  const [ boardState, setBoardState ] = useState<BoardState>([]);

  return (

    <div className="app" style={{ display: 'flex', flexDirection: 'column' }}>
      <AddPostItForm setBoardState={setBoardState} />
      <TrelloBoard setBoardState={setBoardState} boardState={boardState} />
    </div>
    
  );
};
