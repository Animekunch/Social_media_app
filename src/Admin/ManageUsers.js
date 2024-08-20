import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const UsersContainer = styled.div`
  padding: 1rem;
`;

const UserList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const UserItem = styled.li`
  background-color: #fff;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://api.example.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <UsersContainer>
      <h2>Manage Users</h2>
      <UserList>
        {users.map(user => (
          <UserItem key={user.id}>
            {user.name} - {user.email}
          </UserItem>
        ))}
      </UserList>
    </UsersContainer>
  );
};

export default ManageUsers;
