import { apiServer } from '../service';

export const useGetListUsers = () => {
  return [
    async () => {
      const users = await apiServer.user.getUsers();
      return users;
    },
  ];
};

export default useGetListUsers;