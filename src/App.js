import { useState } from 'react';

function Square() {
  const [value, setValue] = useState(null);
  function toggleX() {
    if (value === 'X') {
      setValue(null);
    } else {
      setValue('X');
    }
  }

  return (
    <button className="square" onClick={toggleX}>
      {value}
    </button>
  );
}

export default function Board() {
  return <>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
  </>
}
