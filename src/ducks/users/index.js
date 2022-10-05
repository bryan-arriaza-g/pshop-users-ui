import users from './users';

export default {
  actions: {
    ...users.userListActions,
  },
  selectors: {
    ...users.userListSelectors,
  },
  reducers: {
    users: users.userListReducer,
  },
};
