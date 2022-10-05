import React, { useState, useEffect } from 'react';
import { Button, Space, Table, Popconfirm } from 'antd';
import { useGetListUsers, useListUsersSelector, useDeleteUser } from '../../hooks/useUser';
import { getStatusRender, DELETE_MSG } from '../../common';
import { successNotification } from '../notification';
import UserModal from './user';

const Users = () => {
  const [selectedUser, setSelectedUser] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [getUsers] = useGetListUsers();
  const [deleteUser] = useDeleteUser();
  const users = useListUsersSelector();

  useEffect(() => {
    const getData = async () => {
      const response = await getUsers();
      return response;
    };
    getData();
  }, []);

  const handleUserModal = user => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleDelete = async user => {
    const response = await deleteUser(user.id);
    successNotification(response.message);
    await getUsers();
  };

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
      render: user => (
        <Space size="middle">
          <Button type="link" onClick={() => handleUserModal(user)}>
            Edit
          </Button>
          <Popconfirm
            placement="rightTop"
            title={DELETE_MSG}
            onConfirm={() => {
              handleDelete(user);
            }}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link">Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <UserModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} selectedUser={selectedUser} />
      <Button type="primary" onClick={() => handleUserModal(null)}>
        Agregar
      </Button>
      <Table key="table-users" columns={columns} dataSource={users} rowKey="id" />
    </div>
  );
};

export default Users;
