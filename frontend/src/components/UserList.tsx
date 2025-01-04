import React from 'react';
import styled from 'styled-components';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserListProps {
  users: User[];
}

// スタイリングの定義
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding: 20px;
`;

const ListItem = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  padding: 15px;
  width: 100%;
  max-width: 400px;
  margin-bottom: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #eef;
  }
`;

const UserName = styled.h3`
  font-size: 1.2rem;
  color: #333;
`;

const UserEmail = styled.p`
  font-size: 1rem;
  color: #555;
`;

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <ListContainer>
      {users.map((user) => (
        <ListItem key={user.id}>
          <UserName>{user.name}</UserName>
          <UserEmail>{user.email}</UserEmail>
        </ListItem>
      ))}
    </ListContainer>
  );
};

export default UserList;
