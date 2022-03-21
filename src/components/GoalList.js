import React from "react";
import "./GoalList.css";

const GoalList = (props) => {
  const border = {
    border: "2px solid #ccc ",
  };
  return (
    <ul className="goal-list">
      {props.goals.map((goal) => {
        return (
          <li key={goal.id} style={border}>
            {goal.text}
          </li>
        );
      })}
    </ul>
  );
};

export default GoalList;
