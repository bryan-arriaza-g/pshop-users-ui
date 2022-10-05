import { apiServer } from '../service';

export const useGetListUsers = () => {
  return [
    async () => {
      const users = await apiServer.user.getUsers();
      return users.content;
    },
  ];
};

export const useCreateUser = () => {
  return [
    async user => {
      const createdUser = await apiServer.user.createUsers(user);
      return createdUser;
    },
  ];
};

export default useGetListUsers;
