import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const GroupsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f8f9fa;
`;

const GroupsHeader = styled.h1`
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #333;
`;

const GroupsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 1200px;
`;

const GroupCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const GroupImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const GroupBody = styled.div`
  padding: 1rem;
`;

const GroupTitle = styled.h5`
  margin: 0;
  font-size: 1.25rem;
  color: #007bff;
`;

const GroupDescription = styled.p`
  margin: 0.5rem 0;
  color: #666;
`;

const Groups = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await axios.get('https://api.example.com/groups');
        setGroups(response.data);
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    };

    fetchGroups();
  }, []);

  return (
    <GroupsContainer>
      <GroupsHeader>Groups</GroupsHeader>
      <GroupsGrid>
        {groups.map((group) => (
          <GroupCard key={group.id}>
            <GroupImage src={group.image} alt={group.name} />
            <GroupBody>
              <GroupTitle>{group.name}</GroupTitle>
              <GroupDescription>{group.description}</GroupDescription>
            </GroupBody>
          </GroupCard>
        ))}
      </GroupsGrid>
    </GroupsContainer>
  );
};

export default Groups;
