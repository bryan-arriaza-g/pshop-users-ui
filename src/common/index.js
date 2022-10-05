import React from 'react';
import { Tag } from 'antd';

export const getStatusRender = (key, status) => {
  const color = status ? 'green' : 'geekblue';
  return (
    <Tag color={color} key={`tag-status-${key}`}>
      {status ? 'ACTIVE' : 'INACTIVE'}
    </Tag>
  );
};

export const getRequiredRule = {
  required: true,
  message: 'This field is required',
};

export const ROLES = {
  admin: 'ADMIN',
  user: 'USER',
};

export default { getStatusRender };
