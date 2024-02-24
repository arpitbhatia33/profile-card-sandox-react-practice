import React from "react";

const Skill = (props) => {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      {props.name}
    </div>
  );
};
export default Skill;
