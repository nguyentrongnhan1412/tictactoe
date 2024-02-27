import React from 'react';
import { Square } from 'components/Square/Square';

export default function Board() {
  return (
    <>
    <div className="board-row">
      <Square/>
      <Square/>
      <Square/>
    </div>

    <div className="board-row">
      <Square/>
      <Square/>
      <Square/>
    </div>

    <div className="board-row">
      <Square/>
      <Square/>
      <Square/>
    </div>

    </>
  );
}