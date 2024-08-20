import React from 'react';
import styled from 'styled-components';

const ManageMoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f8f9fa;
`;

const ManageMoreHeader = styled.h1`
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #333;
`;

const ManageMoreContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
`;

const ManageMoreSection = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-bottom: 1rem;
`;

const ManageMoreTitle = styled.h5`
  margin: 0;
  font-size: 1.25rem;
  color: #007bff;
`;

const ManageMoreDescription = styled.p`
  margin: 0.5rem 0;
  color: #666;
`;

const ManageMore = () => {
  return (
    <ManageMoreContainer>
      <ManageMoreHeader>Manage More</ManageMoreHeader>
      <ManageMoreContent>
        <ManageMoreSection>
          <ManageMoreTitle>Section 1</ManageMoreTitle>
          <ManageMoreDescription>
            Description for section 1.
          </ManageMoreDescription>
        </ManageMoreSection>
        <ManageMoreSection>
          <ManageMoreTitle>Section 2</ManageMoreTitle>
          <ManageMoreDescription>
            Description for section 2.
          </ManageMoreDescription>
        </ManageMoreSection>
        {/* Add more sections as needed */}
      </ManageMoreContent>
    </ManageMoreContainer>
  );
};

export default ManageMore;
