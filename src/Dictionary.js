import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}...`);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeyword} />
      </form>
    </div>
  );
}
