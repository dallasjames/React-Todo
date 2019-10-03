import React from "react";
import './Todo.css'

const Item = props => {
  return (
    <div onClick={props.onClick} 
    className={`${props.item.done ? "done" : ""}`}>
      <p>
        {props.item.name}
        </p>
    </div>
  );
};

export default Item;

// {`${props.item.done ? "done" : ""}`}