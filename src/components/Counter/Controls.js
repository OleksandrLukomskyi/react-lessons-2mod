import React from 'react';

const Controls = ({ onIncrement, onDecrement }) => (
  <div className="counterControls">
    <button type="button" onClick={onIncrement}>
      Збільшити на 1
    </button>
    <button type="button" onClick={onDecrement}>
      Зменшити на 1
    </button>
  </div>
);

export default Controls;
