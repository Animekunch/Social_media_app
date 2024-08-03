import React from 'react';
import styled from 'styled-components';

const ReelsContainer = styled.div`
  display: flex;
//   overflow-x: scroll;
  padding: 1rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  margin-bottom: 1rem;
`;

const ReelItem = styled.div`
  min-width: 100px;
  height: 150px;
  margin-right: 1rem;
  background-color: #ddd;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ReelImage = styled.img`
  width: 100%;
  height: auto;
`;

const Reels = () => {
  const reelData = [
    { id: 1, imageUrl: 'https://via.placeholder.com/100x150' },
    { id: 2, imageUrl: 'https://via.placeholder.com/100x150' },
    { id: 3, imageUrl: 'https://via.placeholder.com/100x150' },
    // Add more reel data as needed
  ];

  return (
    <ReelsContainer>
      {reelData.map((reel) => (
        <ReelItem key={reel.id}>
          <ReelImage src={reel.imageUrl} alt={`Reel ${reel.id}`} />
        </ReelItem>
      ))}
    </ReelsContainer>
  );
};

export default Reels;
