import React, { useState } from "react";
import styled from "styled-components";

const PostContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  font-size: 1rem;
`;

const PostImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const PostCaption = styled.div`
  padding: 0.5rem;
  border-bottom: 1px solid #ddd;
  font-size: 1rem;
  color: #333;
`;

const CommentsSection = styled.div`
  border-top: 1px solid #ddd;
  padding: 1rem;
  background-color: #f8f9fa;
`;

const CommentInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Comment = styled.div`
  margin-top: 0.5rem;
  padding: 0.5rem;
  border-bottom: 1px solid #ddd;
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  margin-top: 0.5rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const Post = ({ username, imageUrl, caption, comments = [] }) => {
  const [newComment, setNewComment] = useState('');
  const [postComments, setPostComments] = useState(comments);

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setPostComments([...postComments, { username: 'You', text: newComment }]);
      setNewComment('');
    }
  };

  return (
    <PostContainer>
      <PostHeader>
        <Avatar />
        <Username>{username}</Username>
      </PostHeader>
      <PostImage src={imageUrl} alt="Post" />
      <PostCaption>{caption}</PostCaption>
      <CommentsSection>
        {postComments.length > 0 ? (
          postComments.map((comment, index) => (
            <Comment key={index}>
              <strong>{comment.username}:</strong> {comment.text}
            </Comment>
          ))
        ) : (
          <p>No comments yet.</p>
        )}
        <form onSubmit={handleCommentSubmit}>
          <CommentInput
            type="text"
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Add a comment..."
          />
          <SubmitButton type="submit">Post</SubmitButton>
        </form>
      </CommentsSection>
    </PostContainer>
  );
};

export default Post;
