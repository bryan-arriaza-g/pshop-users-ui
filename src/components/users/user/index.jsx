import React, { useState } from 'react';
import { Modal, Form, Input, Checkbox, Select } from 'antd';
import { successNotification } from '../../notification';
import { getRequiredRule, ROLES } from '../../../common';
import { useCreateUser } from '../../../hooks/useUser';

const UserModal = ({ isModalOpen, setIsModalOpen }) => {
  const [form] = Form.useForm();
  const [createUser] = useCreateUser();
  const { Option } = Select;

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  const onFinish = async () => {
    try {
      await form.validateFields();
      const formValues = form.getFieldsValue();
      const response = await createUser(formValues);
      successNotification(response.message);
      form.resetFields();
      setIsModalOpen(false);
    } catch (err) {}
  };

  const handleOk = () => {
    onFinish();
  };

  return (
    <Modal title="User" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Form
        name="form-user"
        initialValues={{
          status: true,
          role: ROLES.user,
        }}
        form={form}
        autoComplete="off"
      >
        <Form.Item label="First Name" name="firstName" rules={[getRequiredRule]}>
          <Input />
        </Form.Item>
        <Form.Item label="Last Name" name="lastName" rules={[getRequiredRule]}>
          <Input />
        </Form.Item>
        <Form.Item label="Username" name="username" rules={[getRequiredRule]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            getRequiredRule,
            {
              type: 'email',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[getRequiredRule]}>
          <Input.Password />
        </Form.Item>
        <Form.Item label="Role" name="role" rules={[getRequiredRule]}>
          <Select>
            <Option value={ROLES.admin}>{ROLES.admin}</Option>
            <Option value={ROLES.user}>{ROLES.user}</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="status"
          valuePropName="checked"
          wrapperCol={{
            offset: 10,
            span: 16,
          }}
        >
          <Checkbox>Active</Checkbox>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserModal;
