import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [results, setResults] = useState(null);
  let [keyword, setKeyword] = useState("");
  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  function search(event) {
    event.preventDefault();

    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleResponse);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeyword} />
      </form>
      <Results results={results} />
    </div>
  );
}
