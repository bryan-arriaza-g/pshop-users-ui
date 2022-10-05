import { get } from './client';

const API_URL = 'http://localhost:4000/api/v1/users';

export const getUsers = async () => {
  const users = await get(API_URL);
  return users;
};

export default { getUsers };
