import React from "react";
import { Card } from "antd";

const Post = ({ id, title, body, deletePost }) => {
  return (
    <Card bordered={true}>
      <h1>{title}</h1>
      <p>{body}</p>

      <button onClick={() => deletePost(id)} className="deleteButton">
        Delete
      </button>
    </Card>
  );
};

export default Post;
