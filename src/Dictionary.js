import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [results, setResults] = useState(null);
  let [keyword, setKeyword] = useState("sunrise");
  let [loaded, setLoaded] = useState(false);
  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeyword} />
          </form>
          <div className="Hint">
            Suggested words: Forest, Ocean, Sunset, Starlight, etc.
          </div>
        </section>

        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
