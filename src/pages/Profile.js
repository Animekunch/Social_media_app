import React, { useState } from 'react';
import styled from 'styled-components';
import EditProfileModal from './EditProfileModal';
import Post from '../components/Post'; // Adjust path if necessary

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f8f9fa;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin-bottom: 2rem;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 1rem;
  object-fit: cover;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Username = styled.h1`
  margin: 0;
  font-size: 2rem;
`;

const Bio = styled.p`
  margin: 0.5rem 0;
  color: #666;
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatValue = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;

const StatLabel = styled.span`
  color: #666;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ToggleButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${props => props.active ? '#007bff' : '#ddd'};
  color: ${props => props.active ? 'white' : 'black'};
  
  &:hover {
    background-color: ${props => props.active ? '#0056b3' : '#ccc'};
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  max-width: 800px;
  width: 100%;
`;

const UploadPostButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 1rem;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const EditProfileButton = styled.button`
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

const Profile = () => {
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/100');
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    username: '_username_',
    bio: 'Just another tech enthusiast. Loves coding and coffee!',
    posts: [], // Start with an empty array
    stats: {
      posts: 0,
      followers: 0,
      following: 0,
    },
  });

  const toggleEditProfileModal = () => {
    setIsEditProfileOpen(!isEditProfileOpen);
  };

  const handleProfileUpdate = (updatedData) => {
    setProfileData(updatedData);
  };

  const handlePostUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newPost = reader.result;
        const caption = prompt('Enter a caption for your post:'); // Ask for caption
        setProfileData(prevState => ({
          ...prevState,
          posts: [
            ...prevState.posts,
            { imageUrl: newPost, caption: caption || '' }
          ],
          stats: {
            ...prevState.stats,
            posts: prevState.stats.posts + 1,
          }
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileImage src={profileImage} alt="Profile" />
        <ProfileInfo>
          <Username>{profileData.username}</Username>
          <Bio>{profileData.bio}</Bio>
          <StatsContainer>
            <Stat>
              <StatValue>{profileData.stats.posts}</StatValue>
              <StatLabel>Posts</StatLabel>
            </Stat>
            <Stat>
              <StatValue>{profileData.stats.followers}</StatValue>
              <StatLabel>Followers</StatLabel>
            </Stat>
            <Stat>
              <StatValue>{profileData.stats.following}</StatValue>
              <StatLabel>Following</StatLabel>
            </Stat>
          </StatsContainer>
        </ProfileInfo>
        <EditProfileButton onClick={toggleEditProfileModal}>Edit Profile</EditProfileButton>
      </ProfileHeader>
      <UploadPostButton as="label" htmlFor="upload-post">
        Upload Post
        <UploadInput
          id="upload-post"
          type="file"
          accept="image/*"
          onChange={handlePostUpload}
        />
      </UploadPostButton>
      <ContentContainer>
        <PostsGrid>
          {profileData.posts.map((post, index) => (
            <Post
              key={index}
              username={profileData.username}
              imageUrl={post.imageUrl}
              caption={post.caption}
            />
          ))}
        </PostsGrid>
      </ContentContainer>
      {isEditProfileOpen && (
        <EditProfileModal
          profileData={profileData}
          onClose={toggleEditProfileModal}
          onUpdate={handleProfileUpdate}
          profileImage={profileImage}
          setProfileImage={setProfileImage}
        />
      )}
    </ProfileContainer>
  );
};

export default Profile;
