import React, { useState, useEffect } from 'react';
import { Button, Space, Table } from 'antd';
import { useGetListUsers } from '../../hooks/useUser';
import { getStatusRender } from '../../common';
import UserModal from './user';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [getUsers] = useGetListUsers();

  useEffect(() => {
    const getData = async () => {
      const response = await getUsers();
      setUsers(response);
      return response;
    };
    getData();
  }, []);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: '',
      render: user => getStatusRender(user.id, user.status),
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size="middle">
          <Button type="link">Edit</Button>
          <Button type="link">Delete</Button>
        </Space>
      ),
    },
  ];

  const handleUserModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <UserModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Button type="primary" onClick={() => handleUserModal()}>
        Agregar
      </Button>
      <Table key="table-users" columns={columns} dataSource={users} rowKey="id" />
    </div>
  );
};

export default Users;
