import React, { useState } from 'react';
import styled from 'styled-components';

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

const ProfileImageContainer = styled.div`
  position: relative;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 1rem;
  object-fit: cover;
`;

const EditProfileImage = styled.label`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #007bff;
  color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  input {
    display: none;
  }
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

const PostItem = styled.div`
  background-color: #ddd;
  height: 150px;
  border-radius: 8px;
  overflow: hidden;
`;

const PostImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ReelsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 1rem;
  max-width: 800px;
  width: 100%;
`;

const ReelItem = styled.div`
  background-color: #ddd;
  height: 120px; /* Slightly smaller than post items */
  border-radius: 8px;
  overflow: hidden;
`;

const ReelImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Profile = () => {
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/100');
  const [showPosts, setShowPosts] = useState(false); // Default to showing reels
  const [profileData, setProfileData] = useState({
    username: '_username_',
    bio: 'Just another tech enthusiast. Loves coding and coffee!',
    posts: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      // Add more post URLs as needed
    ],
    reels: [
      'https://via.placeholder.com/100x150',
      'https://via.placeholder.com/100x150',
      'https://via.placeholder.com/100x150',
      // Add more reel URLs as needed
    ],
    stats: {
      posts: 3,
      followers: 10,
      following: 5,
    },
  });

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

  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileImageContainer>
          <ProfileImage src={profileImage} alt="Profile" />
          <EditProfileImage>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            📷
          </EditProfileImage>
        </ProfileImageContainer>
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
      </ProfileHeader>
      <ButtonContainer>
        <ToggleButton
          active={!showPosts}
          onClick={() => setShowPosts(false)}
        >
          Reels
        </ToggleButton>
        <ToggleButton
          active={showPosts}
          onClick={() => setShowPosts(true)}
        >
          Posts
        </ToggleButton>
      </ButtonContainer>
      <ContentContainer>
        {!showPosts ? (
          <ReelsContainer>
            {profileData.reels.map((reel, index) => (
              <ReelItem key={index}>
                <ReelImage src={reel} alt={`Reel ${index + 1}`} />
              </ReelItem>
            ))}
          </ReelsContainer>
        ) : (
          <PostsGrid>
            {profileData.posts.map((post, index) => (
              <PostItem key={index}>
                <PostImage src={post} alt={`Post ${index + 1}`} />
              </PostItem>
            ))}
          </PostsGrid>
        )}
      </ContentContainer>
    </ProfileContainer>
  );
};

export default Profile;
