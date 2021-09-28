import React from "react";
import Post from "./Post/Post";

export default function PostList({ posts = [] }) {
  return (
    <div>
      {posts.map((postdetail) => (
        <Post
          message={postdetail.message}
          key={postdetail.message}
          gifs={postdetail.gifs}
        />
      ))}
    </div>
  );
}
