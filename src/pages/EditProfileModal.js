import React, { useState } from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalHeader = styled.h2`
  margin-bottom: 1rem;
`;

const ModalInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ProfileImageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
`;

const EditProfileImage = styled.label`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;

  input {
    display: none;
  }
`;

const SaveButton = styled.button`
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

const CancelButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #ccc;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 1rem;
  
  &:hover {
    background-color: #999;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const EditProfileModal = ({ profileData, onClose, onUpdate, profileImage, setProfileImage }) => {
  const [username, setUsername] = useState(profileData.username);
  const [bio, setBio] = useState(profileData.bio);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const updatedData = {
      ...profileData,
      username,
      bio,
    };
    onUpdate(updatedData);
    onClose();
  };

  return (
    <>
      <ModalOverlay onClick={onClose} />
      <ModalContainer>
        <ModalHeader>Edit Profile</ModalHeader>
        <ProfileImageContainer>
          <ProfileImage src={profileImage} alt="Profile" />
          <EditProfileImage>
            Change Profile Picture
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </EditProfileImage>
        </ProfileImageContainer>
        <ModalInput
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <ModalInput
          type="text"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Bio"
        />
        <ButtonContainer>
          <SaveButton onClick={handleSave}>Save</SaveButton>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
        </ButtonContainer>
      </ModalContainer>
    </>
  );
};

export default EditProfileModal;
