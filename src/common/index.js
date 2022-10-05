import React from 'react';
import { Tag } from 'antd';

export const getStatusRender = (key, status) => {
  const color = status === 'ACTIVE' ? 'green' : 'geekblue';
  return (
    <Tag color={color} key={`tag-status-${key}`}>
      {status}
    </Tag>
  );
};

export default { getStatusRender };
