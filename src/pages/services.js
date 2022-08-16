import React, { useState } from 'react';
//import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import MyLayout from '../components/mylayout';
import styled from 'styled-components';
import { Table, Button, Modal, Form, message, Input } from 'antd';
const Services = () => {

  const MyHeaderHTML = () => {
    return <div>
      <button>Day</button>
      <button>Month</button>
    </div>
  }

  const MyHeaderTitle = () => {
    return <h2>Services</h2>
  }

  const headerProps = {
    title: <MyHeaderTitle />,
    html: <MyHeaderHTML />, // set the html empty in case when only need to show title of the page
  };

  const [modal1Visible, setModal1Visible] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    message.success('Submit success!');
  };

  const onFinishFailed = () => {
    message.error('Submit failed!');
  };

  const tableColumns = [
    {
      title: '',
      key: 'index',
      dataIndex: 'index',
    },
    {
      title: 'Client name',
      key: 'name',
      dataIndex: 'name',
    },
    {
      title: 'Notes',
      key: 'note',
      dataIndex: 'note',
    },
    {
      title: 'Service',
      key: 'service',
      dataIndex: 'service',
    }
  ]
  return (
    <MyLayout headerProps={headerProps}>
      <div className="login-bg" style={{ height: '100%', padding: '40px' }}>
        <Wrapper>
          <Table
            columns={tableColumns}
            pagination={false}
            dataSource={[
              { index: 1, name: 'yasin', service: 'data entry', note: 'development is a good job' },
              { index: 2, name: 'yasin', service: 'data entry', note: 'development is a good job' },
              { index: 3, name: 'yasin', service: 'data entry', note: 'development is a good job' },
              { index: 4, name: 'yasin', service: 'data entry', note: 'development is a good job' },
              { index: 5, name: 'yasin', service: 'data entry', note: 'development is a good job' },
              { index: 6, name: 'yasin', service: 'data entry', note: 'development is a good job' },
            ]}
          />
          <div style={{ textAlign: 'right', padding: '30px' }}>
            <Button className="btn-info" type="primary" onClick={() => setModal1Visible(true)}>
              Add Service
            </Button>
          </div>
          <Modal
            title="Add Service"
            centered
            visible={modal1Visible}
            onOk={() => setModal1Visible(false)}
            onCancel={() => setModal1Visible(false)}
            footer={[
              <Button key="submit" type="primary">
                Save Service
              </Button>
            ]}
          >
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item name="service_name" label="Service Name">
                <Input placeholder="" />
              </Form.Item>
              <Form.Item label="Service Description" name="service_description">
                <Input placeholder="" />
              </Form.Item>
              <Form.Item label="Service Price" name="service_price">
                <Input placeholder="" />
              </Form.Item>
              {/* <Form.Item>
              <Button type="primary"  htmlType="submit">Submit</Button>
            </Form.Item> */}
            </Form>
          </Modal>
        </Wrapper>
      </div>
    </MyLayout>

  );
};

export default Services;

const Wrapper = styled.div`
  background-color: #FFF;
  border: 1px solid #e8e8e8;
  border-radius: 15px;
  height: 100%;
  opacity: 0.9;
  padding: 10px;
  .ant-table-thead > tr > th{
    background-color: #FFF;
  }
`;