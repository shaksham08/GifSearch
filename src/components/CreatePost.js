import React, { useState } from "react";
import Avtar from "../images/avtar.png";
import CreatePostModal from "./CreatePostModal";

export default function CreatePost({ addPost }) {
  const [post, setPost] = useState({ message: "", gifs: [] });
  const [modal, setModal] = useState(false);
  //toggle function for modal
  const toggle = () => {
    setModal(!modal);
  };

  //handleChange to set message
  const handleChange = (text) => {
    const gifs = post.gifs;
    setPost({ message: text, gifs });
  };

  //funciton to add gifs selected to the state from modal
  const addGifs = (gifurl) => {
    const message = post.message;

    setPost({ message: message, gifs: [...post.gifs, gifurl] });
  };

  //funciton to call add post
  const handleAddPost = () => {
    if (post.message !== "") {
      addPost({ post });
      setPost({ message: "", gifs: [] });
    }
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
          <img src={el.link} alt={el} key={el.id} />
        ))}
      </div>

      <div className="createpost-container--button">
        <button onClick={() => toggle()} className="btn">
          Search Giphy
        </button>
        <button onClick={() => handleAddPost()} className="btn">
          Create Post
        </button>
      </div>
    </div>
  );
}
