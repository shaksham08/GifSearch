import React from "react";

export default function Post({ message = "", gifs = [] }) {
  return (
    <div className="post-container">
      <p>{message}</p>
      <div className="post-container-gifs">
        {gifs.map((gif) => (
          <img src={gif.link} alt={gif} key={gif.id} />
        ))}
      </div>
    </div>
  );
}
