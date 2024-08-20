import React, { useState } from 'react';
import styled from 'styled-components';
import ManageUsers from './ManageUsers'; // Component to manage users
import ManageJobBoard from './ManageJobBoard'; // Component to manage job board
import ManageGroups from './ManageGroups'; // Component to manage groups
import ManageQA from './ManageQA'; // Component to manage QA
import ManageMore from './ManageMore'; // Component to manage "More" section
import ManageEvents from './ManageEvents'; // Component to manage events

const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f1f1f1;
`;

const AdminHeader = styled.h1`
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #333;
`;

const Tabs = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Tab = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${props => (props.active ? '#007bff' : '#ddd')};
  color: ${props => (props.active ? 'white' : 'black')};

  &:hover {
    background-color: ${props => (props.active ? '#0056b3' : '#ccc')};
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
`;

const Admin = () => {
  const [activeTab, setActiveTab] = useState('users');

  return (
    <AdminContainer>
      <AdminHeader>Admin Dashboard</AdminHeader>
      <Tabs>
        <Tab active={activeTab === 'users'} onClick={() => setActiveTab('users')}>
          Manage Users
        </Tab>
        <Tab active={activeTab === 'jobBoard'} onClick={() => setActiveTab('jobBoard')}>
          Manage Job Board
        </Tab>
        <Tab active={activeTab === 'groups'} onClick={() => setActiveTab('groups')}>
          Manage Groups
        </Tab>
        <Tab active={activeTab === 'qa'} onClick={() => setActiveTab('qa')}>
          Manage Q&A
        </Tab>
        <Tab active={activeTab === 'more'} onClick={() => setActiveTab('more')}>
          Manage More
        </Tab>
        <Tab active={activeTab === 'more'} onClick={() => setActiveTab('more')}>
          Manage Events
        </Tab>
      </Tabs>
      <ContentContainer>
        {activeTab === 'users' && <ManageUsers />}
        {activeTab === 'jobBoard' && <ManageJobBoard />}
        {activeTab === 'groups' && <ManageGroups />}
        {activeTab === 'qa' && <ManageQA />}
        {activeTab === 'more' && <ManageMore />}
        {activeTab === 'more' && <ManageEvents />}
      </ContentContainer>
    </AdminContainer>
  );
};

export default Admin;
