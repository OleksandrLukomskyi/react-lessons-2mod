import React from 'react';
import IconButton from 'components/IconButton';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';

import '../TodoList/TodoList.css';

const Todo = ({ text, completed, onToggleCompleted, onDelete }) => (
  <>
    <input
      type="checkbox"
      className="TodoList__checkbox"
      checked={completed}
      onChange={onToggleCompleted}
    />
    <p className="TodoList__text">{text}</p>
    <IconButton>
      <DeleteIcon width="32" height="32" onClick={onDelete} />
    </IconButton>
    {/* <button onClick={onDelete}>Видалити</button> */}
  </>
);

export default Todo;
