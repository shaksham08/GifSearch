import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import CreatePost from "./components/CreatePost";
import "./App.css";
import PostList from "./components/PostList";

function App() {
  const [postList, setPostList] = useState([
    {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, labore ullam ab et, sint ea non quisquam blanditiis ipsa unde repellendus exercitationem optio harum fuga aliquam. Quibusdam voluptatum deserunt aliquam!",
      gifs: [
        {
          link: "https://media0.giphy.com/media/26wkHr7f5kbCHOaMo/200w.webp?cid=29a478a3m2er1puv79l57qjrtkq2nztumf0nwxbienita3im&rid=200w.webp&ct=g",
          id: 12345,
        },
      ],
    },
  ]);

  //function to add post to final post list
  const addPost = (post) => {
    setPostList([...postList, post.post]);
  };

  return (
    <div className="container">
      <CreatePost addPost={addPost} />
      <PostList posts={postList} />
    </div>
  );
}

export default App;
