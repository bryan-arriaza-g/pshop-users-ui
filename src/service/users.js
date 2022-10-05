import { get, post } from './client';

const API_URL = 'http://localhost:4000/api/v1/users';

export const getUsers = async () => {
  const users = await get(API_URL);
  return users;
};

export const createUsers = async user => {
  const createdUser = await post(API_URL, user);
  return createdUser;
};

export default { getUsers };
