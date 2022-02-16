import { connect } from "react-redux";
import Post from "./components/Post";
import "./index.sass";
import "antd/dist/antd.css";
import {
  getPosts as getPostsAction,
  deletePost as deletePostAction,
} from "./redux/modules/posts";
import { useEffect, useState } from "react";
import CreatePost from "./components/CreatePost";

function App({ posts, getPosts, deletePost }) {
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="App">
      <CreatePost />
      {posts.length > 0 &&
        posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            deletePost={deletePost}
            title={post.title}
            body={post.body}
          />
        ))}
    </div>
  );
}

export default connect(({ posts }) => ({ posts: posts.posts }), {
  getPosts: getPostsAction,
  deletePost: deletePostAction,
})(App);
