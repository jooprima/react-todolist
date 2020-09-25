import React from "react";
import PropsTypes from "prop-types";

const Todo = (props) => {
  return (
    <div className="todo">
      <span className="todo-text">{props.text}</span>
    </div>
  );
};

Todo.propsTypes = {
  text: PropsTypes.string.isRequired
};

export default Todo;
