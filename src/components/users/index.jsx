import React, { useEffect } from 'react';
import { useGetListUsers } from '../../hooks/useUser';

const Users = () => {
  const [getUsers] = useGetListUsers();

  useEffect(() => {
    const getData = async () => {
      const response = await getUsers();
      return response;
    };
    getData();
  }, []);

  return <h1>Hello! Users</h1>;
};

export default Users;
