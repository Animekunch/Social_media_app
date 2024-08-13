import React from 'react';
import styled from 'styled-components';
import Feed from '../components/Feed';
import Post from '../components/Post'

const HomeContainer = styled.div`
  margin-left: ${props => (props.isNavbarExtended ? '80px' : '40px')}; /* Adjust margin based on navbar state */
  padding: 1rem;
  background-color: #f8f9fa;
  min-height: 100vh;
  max-height: 100vh; /* Ensure the container fits within the viewport */
  overflow-y: auto; /* Enable vertical scrolling */
  transition: margin-left 0.3s ease; /* Smooth transition */
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeedWrapper = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
`;

const Home = ({ isNavbarExtended }) => {
  return (
    <HomeContainer isNavbarExtended={isNavbarExtended}>
      <ContentContainer>
        <FeedWrapper>
          <Feed />
          <Post />
        </FeedWrapper>
      </ContentContainer>
    </HomeContainer>
  );
};

export default Home;
