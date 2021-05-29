import React, { useEffect, useState } from "react";
import Button from "./Button";
// Point Component: checked or not?
function Point(props) {
  return (
    <div
      className={props.checked ? "point1" : "point0"}
      onClick={ props.disabled?null:props.click}
    />
  );
}
// Responsive five Points rating
function Rating(props) {
  const [id, setId] = useState(0);
  const [rating, setRate] = useState(props.rate);
  const proto = [];
  let i = 1;
  while (i <= 5) {
    if (i <= rating) {
      proto.push(1);
    } else {
      proto.push(0);
    }
    i++;
  }
  return (
    <div className="pointWrap">
      {proto.map((rate, index) => (
        <Point
          click={() => {
            parseFloat(index + 1) === parseFloat(rating)
              ? setRate((prevRate) => index)
              : setRate((prevRate) => index + 1);
          }}
          checked={rate}
          key={`${id}${index}`}
         disabled={props.disabled}
        />
      ))}
    </div>
  );
}
// Skill input
function Skill(props) {
const [text, setText] = useState('')
  return (
    <input
      onChange={ (e) => setText(e.target.value)}
      value={text}
      disabled={props.disabled}
      index={props.index}
      className = '.bar input'
      type="text"
      style={{
        borderStyle: props.disabled ? "none" : "solid",
        color: props.color,
      }}
    />
  );
}
// Composed Component
function Bar(props) {
  let ids = [1, 2, 3, 4, 5, 6, 7];
  const [pointClass, setPointClass] = useState([]);
  const [skills, setSkills] = useState([]);

  // Add new skill inputs
  function addSkill(e) {
    e.preventDefault();
    const newSkills = skills;
    newSkills.push("");
    const newPoints = [...pointClass];
    newPoints.push([0, 0, 0, 0, 0]);
    setSkills([...newSkills]);
    setPointClass([...newPoints]);
  }

  return (
    <div>
      {skills.map((item, index) => {
        return (
          <div className="bar">
            <Skill
              skill={skills[index]}
              key={`skill${ids[index]}`}
              disabled = {props.disabled}
              color = {props.color}
            />
            <Rating key={`rating${ids[index]}`} disabled={props.disabled} />
          </div>
        );
      })}
      <Button
        key={`sklBtn${ids}`}
        click={addSkill}
        disabled={props.disabled}
        value="New Skill"
      />
    </div>
  );
}

export default Bar;
