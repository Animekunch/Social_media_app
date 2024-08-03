import React from "react";
import styled from "styled-components";

const PostContainer = styled.div`
  border: 1px solid #ddd;
  margin-bottom: 1rem;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #f8f9fa;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  background-color: #ddd;
  border-radius: 50%;
  margin-right: 1rem;
`;

const Username = styled.div`
  font-weight: bold;
`;

const PostImage = styled.img`
  width: 100%;
  height: auto;
`;

const PostCaption = styled.div`
  padding: 1rem;
`;

const Post = ({ username, imageUrl, caption }) => {
  return (
    <PostContainer>
      <PostHeader>
        <Avatar />
        <Username>{username}</Username>
      </PostHeader>
      <PostImage src={imageUrl} alt="Post" />
      <PostCaption>{caption}</PostCaption>
    </PostContainer>
  );
};

export default Post;
