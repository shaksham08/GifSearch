import React, { useEffect, useState } from "react";
import axios from "axios";

const apikey = "J7ViEmrh3FOcbGvyLOgsQ4OMqODHHRBY";

//api calls
const gifApiCall = (setGifs, searchTerm = "", setIsLoading) => {
  setIsLoading(true);
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
      setIsLoading(false);
    })
    .catch((err) => {
      setIsLoading(false);
      alert("Error in getting list of GIFS");
    });
};

export default function Gifs({ searchTerm, addGifs, toggle }) {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    //Debounce logic
    let value = setTimeout(() => {
      setGifs([]);
      gifApiCall(setGifs, searchTerm, setIsLoading);
    }, 1000);

    return () => {
      clearTimeout(value);
    };
  }, [searchTerm]);

  const handleClick = (gif) => {
    toggle();
    addGifs({ id: gif.id, link: gif.images.fixed_width_small.url });
  };

  if (isLoading) {
    return <h3>Loading...</h3>;
  } else
    return (
      <div className="gifsearch-container">
        {gifs.map((gif) => (
          <img
            onClick={() => handleClick(gif)}
            src={gif.images.fixed_width_small.url}
            alt={gif}
            key={gif.id}
          />
        ))}
      </div>
    );
}
