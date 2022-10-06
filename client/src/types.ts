import React from 'react';


export type PostItChildren = string[];

export type PostIt = {
  header: string,
  postItChildren: PostItChildren
}

export type BoardState = PostIt[] | [];

export type SetBoardState = React.Dispatch<React.SetStateAction<BoardState>>
