import React from "react";
import { Form, Input, Button } from "antd";
import { connect } from "react-redux";
import { createPost as createPostAction } from "../redux/modules/posts";

const CreatePost = ({ createPost }) => {
  onsubmit = (values) => {
    createPost(values);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onsubmit}
      autoComplete="off"
    >
      <Form.Item label="Title" name="title">
        <Input />
      </Form.Item>

      <Form.Item label="Body" name="body">
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default connect(null, {
  createPost: createPostAction,
})(CreatePost);
