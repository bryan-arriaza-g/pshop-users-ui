import { useDispatch, useSelector } from 'react-redux';
import { apiServer } from '../service';
import { ducks } from '../ducks';

export const useListUsersSelector = () => {
  return useSelector(state => ducks.users.selectors.getUserList(state));
};

export const useGetListUsers = () => {
  const dispatch = useDispatch();
  return [
    async () => {
      let response = [];
      try {
        dispatch(ducks.users.actions.getUserList());
        const users = await apiServer.user.getUsers();
        dispatch(ducks.users.actions.getUserListSuccess(users.content));
        response = users.content;
      } catch (err) {
        dispatch(ducks.users.actions.getUserListFail(err));
      }
      return response;
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

export const useUpdateUser = () => {
  return [
    async user => {
      const updatedUser = await apiServer.user.updateUser(user);
      return updatedUser;
    },
  ];
};

export const useDeleteUser = () => {
  return [
    async userId => {
      const removedUser = await apiServer.user.removeUser(userId);
      return removedUser;
    },
  ];
};

export default useGetListUsers;
