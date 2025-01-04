import React from 'react';
import UserList from '../components/UserList';

// ユーザーの型を定義
interface User {
  id: number;
  name: string;
  email: string;
}

interface HomeProps {
  users: User[];
}

const Home: React.FC<HomeProps> = ({ users }) => {
  return <UserList users={users} />;
};

export const getServerSideProps = async () => {
  // Rails APIからユーザーデータを取得
  const res = await fetch('http://localhost:3000/api/v1/users');
  const data: User[] = await res.json();

  return {
    props: { users: data },
  };
};

export default Home;
