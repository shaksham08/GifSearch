import React from "react";
import Post from "./Post/Post";

export default function PostList({ posts = [] }) {
  console.log(posts);
  return (
    <div>
      {posts.map((postdetail) => (
        <Post message={postdetail.message} gifs={postdetail.gifs} />
      ))}
    </div>
  );
}
