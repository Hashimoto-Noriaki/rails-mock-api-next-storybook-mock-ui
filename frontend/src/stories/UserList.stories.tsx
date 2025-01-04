import UserList from '../components/UserList';

// モックデータを用意
const mockUsers = [
  { id: 1, name: 'Next.js Taro', email: 'taro@example.com' },
  { id: 2, name: 'React Jiro', email: 'jiro@example.com' },
];

export default {
  title: 'UserList',
  component: UserList,
};

export const Default = () => <UserList users={mockUsers} />;
