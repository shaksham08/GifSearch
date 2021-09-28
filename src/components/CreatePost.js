import React, { useState } from "react";
import Avtar from "../images/avtar.png";
import CreatePostModal from "./CreatePostModal";

export default function CreatePost({ addPost }) {
  const [post, setPost] = useState({ message: "", gifs: [] });
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };

  const handleChange = (text) => {
    const gifs = post.gifs;
    setPost({ message: text, gifs });
  };

  const addGifs = (gifurl) => {
    setPost({ gifs: [...post.gifs, gifurl] });
  };

  return (
    <div className="createpost-container">
      <CreatePostModal toggle={toggle} modal={modal} addGifs={addGifs} />
      <div className="createpost-container--post">
        <img className="avtar" src={Avtar} alt="avatar" />
        <textarea
          value={post.message}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Write Something!!!"
        ></textarea>
      </div>

      <div className="createpost-container--temp">
        {post.gifs.map((el) => (
          <img src={el} alt={el} />
        ))}
      </div>

      <div className="createpost-container--button">
        <button onClick={() => toggle()} className="btn">
          Search Giphy
        </button>
        <button
          onClick={() => post.message !== "" && addPost({ post })}
          className="btn"
        >
          Create Post
        </button>
      </div>
    </div>
  );
}
