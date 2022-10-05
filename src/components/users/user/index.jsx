import React, { useEffect } from 'react';
import { Modal, Form, Input, Checkbox, Select } from 'antd';
import { successNotification } from '../../notification';
import { getRequiredRule, ROLES } from '../../../common';
import { useGetListUsers, useCreateUser, useUpdateUser } from '../../../hooks/useUser';

const UserModal = ({ isModalOpen, setIsModalOpen, selectedUser }) => {
  const [form] = Form.useForm();
  const [getUsers] = useGetListUsers();
  const [createUser] = useCreateUser();
  const [updateUser] = useUpdateUser();
  const { Option } = Select;

  useEffect(() => {
    if (isModalOpen && selectedUser) {
      form.setFieldsValue({ ...selectedUser });
    }
  }, [isModalOpen]);

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  const onFinish = async () => {
    try {
      await form.validateFields();
      const formValues = form.getFieldsValue();
      let response;
      if (!selectedUser) {
        response = await createUser(formValues);
      } else {
        response = await updateUser({ ...selectedUser, ...formValues });
      }
      await getUsers();
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
