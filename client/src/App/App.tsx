import { useState, StrictMode } from 'react';
import { TrelloBoard } from '../ProprietaryComponents';
import { BoardState } from '../types';
import { TrelloHeader } from '../TrelloHeader/TrelloHeader';


export const App = () => {

  const [ boardState, setBoardState ] = useState<BoardState>([]);

  return (
    <StrictMode>
      <div className="app" style={{ display: 'flex', flexDirection: 'column' }}>
        <TrelloHeader setBoardState={setBoardState} />
        <TrelloBoard setBoardState={setBoardState} boardState={boardState} />
      </div>
    </StrictMode>
  );
};
