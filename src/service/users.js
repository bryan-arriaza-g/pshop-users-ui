import { get, post, put, remove } from './client';

const API_URL = 'http://localhost:4000/api/v1/users';

export const getUsers = async () => {
  const users = await get(API_URL);
  return users;
};

export const createUsers = async user => {
  const createdUser = await post(API_URL, user);
  return createdUser;
};

export const updateUser = async user => {
  const updatedUser = await put(`${API_URL}/${user.id}`, user);
  return updatedUser;
};

export const removeUser = async userId => {
  const removedUser = await remove(`${API_URL}/${userId}`);
  return removedUser;
};

export default { getUsers };
