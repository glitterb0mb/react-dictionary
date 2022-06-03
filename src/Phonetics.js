// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Phonetics(props) {
  console.log(props);
  return (
    <div className="Phonetics">
      <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      <br />
      {props.phonetics.text}
    </div>
  );
}
