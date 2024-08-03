import React, { useState } from 'react';
import styled from 'styled-components';
import Feed from '../components/Feed';
import Reels from '../components/Reels';
import Search from '../components/Search'; // Import Search component

const HomeContainer = styled.div`
  margin-left: 20px; /* Matches the width of the Navbar */
  padding: 0rem;
  background-color: #f8f9fa; /* Matching background color with the Profile page */
  min-height: 100vh; /* Ensure it takes full height */
`;

const PageTitle = styled.h1`
  margin: 0;
  padding: 1rem 0;
  font-size: 2rem;
  text-align: center;
  color: #333; /* Adjusted color for better contrast */
`;

const SearchWrapper = styled.div`
  margin-bottom: 2rem; /* Increased space below the search to match profile */
  position: relative; /* Ensure it's on top of other content */
  z-index: 1; /* Ensure it is above other content */
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
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
  margin: 0 auto; /* Center align content */
`;

const ReelsWrapper = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
`;

const FeedWrapper = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
`;

const Home = () => {
  const [showReels, setShowReels] = useState(true);

  const handleToggle = (section) => {
    setShowReels(section === 'reels');
  };

  return (
    <HomeContainer>
      <PageTitle>Social_Media</PageTitle>
      {/* <SearchWrapper>
        <Search />
      </SearchWrapper> */}
      <ButtonContainer>
        <ToggleButton
          active={showReels}
          onClick={() => handleToggle('reels')}
        >
          Reels
        </ToggleButton>
        <ToggleButton
          active={!showReels}
          onClick={() => handleToggle('feed')}
        >
          Feed
        </ToggleButton>
      </ButtonContainer>
      <ContentContainer>
        {showReels ? (
          <ReelsWrapper>
            <Reels />
          </ReelsWrapper>
        ) : (
          <FeedWrapper>
            <Feed />
          </FeedWrapper>
        )}
      </ContentContainer>
    </HomeContainer>
  );
};

export default Home;
