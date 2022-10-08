import { useState } from 'react';
import { AddPostItForm, TrelloBoard } from '../Components';
import { BoardState } from '../../types';

export const App = () => {
// put a form up top.
  // what does my state look like?
  // make this an array of jsx elements
  const [ boardState, setBoardState ] = useState<BoardState>([]);

  return (
    // Add Post It Form
    // Board Container
    <div className="app" style={{ display: 'flex', flexDirection: 'column' }}>
      <AddPostItForm setBoardState={setBoardState} />
      <TrelloBoard setBoardState={setBoardState} boardState={boardState} />
    </div>
    
  );
};
