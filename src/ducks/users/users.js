import { createSlice } from '@reduxjs/toolkit';

const userListSlice = createSlice({
  name: 'users/LIST_USER',
  initialState: {
    loading: false,
    data: [],
    error: {},
  },
  reducers: {
    getUserList(state) {
      state.loading = true;
    },
    getUserListSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    getUserListFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const userListSelectors = {
  getUserList: state => state.users.users.data,
};

export default {
  userListSlice,
  userListActions: userListSlice.actions,
  userListSelectors,
  userListReducer: userListSlice.reducer,
};
