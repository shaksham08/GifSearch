import React, { useEffect, useState } from "react";
import axios from "axios";

const apikey = "J7ViEmrh3FOcbGvyLOgsQ4OMqODHHRBY";

const gifApiCall = (setGifs, searchTerm = "") => {
  const url =
    searchTerm === ""
      ? "https://api.giphy.com/v1/gifs/trending"
      : "https://api.giphy.com/v1/gifs/search";
  axios
    .get(url, {
      params: {
        api_key: apikey,
        q: searchTerm,
        limit: 20,
      },
    })
    .then((res) => {
      setGifs(res.data.data);
    });
};
export default function Gifs({ searchTerm, addGifs, toggle }) {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setGifs([]);
    gifApiCall(setGifs, searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    setGifs([]);
    gifApiCall(setGifs, "");
  }, []);

  const handleClick = (url) => {
    toggle();
    addGifs(url);
  };

  return (
    <div class="gifsearch-container">
      {gifs.map((gif) => (
        <img
          onClick={() => handleClick(gif.images.fixed_width_small.url)}
          src={gif.images.fixed_width_small.url}
          alt={gif}
        />
      ))}
    </div>
  );
}
