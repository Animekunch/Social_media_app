import React from 'react';
import styled from 'styled-components';

const MoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f8f9fa;
`;

const MoreHeader = styled.h1`
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #333;
`;

const MoreContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
`;

const MoreSection = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-bottom: 1rem;
`;

const MoreTitle = styled.h5`
  margin: 0;
  font-size: 1.25rem;
  color: #007bff;
`;

const MoreDescription = styled.p`
  margin: 0.5rem 0;
  color: #666;
`;

const More = () => {
  return (
    <MoreContainer>
      <MoreHeader>More</MoreHeader>
      <MoreContent>
        <MoreSection>
          <MoreTitle>Section 1</MoreTitle>
          <MoreDescription>
            Description for section 1.
          </MoreDescription>
        </MoreSection>
        <MoreSection>
          <MoreTitle>Section 2</MoreTitle>
          <MoreDescription>
            Description for section 2.
          </MoreDescription>
        </MoreSection>
        {/* Add more sections as needed */}
      </MoreContent>
    </MoreContainer>
  );
};

export default More;
