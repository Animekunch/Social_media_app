import React, { useState } from 'react';
import styled from 'styled-components';

const PostUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  width: 100%;
  max-width: 400px;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const CaptionInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const UploadButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const UploadInput = styled.input`
  display: none;
`;

const PostUpload = ({ onPostUpload }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [caption, setCaption] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handleUpload = () => {
    if (selectedImage) {
      onPostUpload({ imageUrl: selectedImage, caption });
      setSelectedImage(null);
      setCaption('');
    }
  };

  return (
    <PostUploadContainer>
      {selectedImage && <PreviewImage src={selectedImage} alt="Preview" />}
      <CaptionInput
        type="text"
        value={caption}
        onChange={handleCaptionChange}
        placeholder="Enter a caption..."
      />
      <UploadButton onClick={handleUpload}>Upload Post</UploadButton>
      <label htmlFor="file-upload">
        <UploadInput
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        Select Image
      </label>
    </PostUploadContainer>
  );
};

export default PostUpload;
