import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="container">
      <h1>Create Post bruh !</h1>
      <PostCreate />
      <br />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
};
