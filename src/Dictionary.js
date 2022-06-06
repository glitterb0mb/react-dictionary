import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [results, setResults] = useState(null);
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);
  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleDictionaryResponse);
    let pexelsAPIKey =
      "563492ad6f91700001000001a9ac2e9f10034847a73feaa37cd63cfe";
    let pexelsAPIURL = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsAPIKey}` };
    axios.get(pexelsAPIURL, { headers: headers }).then(handlePexelsResponse);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
