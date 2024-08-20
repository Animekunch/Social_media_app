import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ManageGroupsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f8f9fa;
`;

const ManageGroupsHeader = styled.h1`
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #333;
`;

const ManageGroupsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 1200px;
`;

const ManageGroupCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const ManageGroupImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ManageGroupBody = styled.div`
  padding: 1rem;
`;

const ManageGroupTitle = styled.h5`
  margin: 0;
  font-size: 1.25rem;
  color: #007bff;
`;

const ManageGroupDescription = styled.p`
  margin: 0.5rem 0;
  color: #666;
`;

const ManageGroups = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await axios.get('https://api.example.com/manage-groups');
        setGroups(response.data);
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    };

    fetchGroups();
  }, []);

  return (
    <ManageGroupsContainer>
      <ManageGroupsHeader>Manage Groups</ManageGroupsHeader>
      <ManageGroupsGrid>
        {groups.map((group) => (
          <ManageGroupCard key={group.id}>
            <ManageGroupImage src={group.image} alt={group.name} />
            <ManageGroupBody>
              <ManageGroupTitle>{group.name}</ManageGroupTitle>
              <ManageGroupDescription>{group.description}</ManageGroupDescription>
            </ManageGroupBody>
          </ManageGroupCard>
        ))}
      </ManageGroupsGrid>
    </ManageGroupsContainer>
  );
};

export default ManageGroups;
