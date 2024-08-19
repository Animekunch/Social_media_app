import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHeart, FaComment } from 'react-icons/fa';
import { useParams } from 'react-router-dom'; // To get post ID from URL

const CommentsPageContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  background-color: #f8f9fa;
`;

const PostContainer = styled.div`
  flex: 1;
  max-width: 600px;
`;

const CommentsContainer = styled.div`
  flex: 1;
  max-width: 400px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CommentList = styled.div`
  max-height: 400px;
  overflow-y: auto;
  margin-bottom: 1rem;
`;

const Comment = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 0.5rem;
`;

const CommentInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const ActionButton = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const CommentsPage = () => {
  const { postId } = useParams(); // Fetch post ID from URL
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <CommentsPageContainer>
      <PostContainer>
        {/* Replace with actual post fetching based on postId */}
        <Post
          imageUrl="https://via.placeholder.com/600x400"
          caption="This is a sample caption for the post."
        />
        <ActionButton>
          <FaHeart /> Like
        </ActionButton>
        <ActionButton>
          <FaComment /> Comment
        </ActionButton>
      </PostContainer>
      <CommentsContainer>
        <CommentList>
          {comments.map((comment, index) => (
            <Comment key={index}>{comment}</Comment>
          ))}
        </CommentList>
        <CommentInput
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <ActionButton onClick={handleAddComment}>Post Comment</ActionButton>
      </CommentsContainer>
    </CommentsPageContainer>
  );
};

export default CommentsPage;
