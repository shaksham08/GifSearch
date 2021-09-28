import React, { useState, useEffect } from "react";
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
        "http://img2.thejournal.ie/inline/2499585/original?width=415&version=2499585",
        "http://img2.thejournal.ie/inline/2499585/original?width=415&version=2499585",
        "http://img2.thejournal.ie/inline/2499585/original?width=415&version=2499585",
        "http://img2.thejournal.ie/inline/2499585/original?width=415&version=2499585",
        "http://img2.thejournal.ie/inline/2499585/original?width=415&version=2499585",
      ],
    },
  ]);

  const addPost = (post) => {
    console.log("This is post", post);
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
