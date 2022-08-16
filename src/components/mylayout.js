import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  TeamOutlined,
  ScheduleOutlined,
  QuestionCircleOutlined,
  BellOutlined,
  CalendarOutlined,
  EditOutlined,
  UserSwitchOutlined,
} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import MyHeader from './my-header';
//import { useNavigate as navigate } from "react-router-dom";

const { Sider, Content } = Layout;


const MyLayout = (props) => {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(true);
  const onClick = (e) => {
    navigate(e.key);
    console.log('click ', e);
    // if(e.key == 1){
    //   {Collapable}
    // }
    // if (e.key == 3) {
    //   //navigate('/login');
    //   // check if this is correct style to redirect
    //   window.location.href = "/login";
    // }
    // if (e.key == 9) {
    //   //navigate('/login');
    //   // check if this is correct style to redirect
    //   window.location.href = "/profile";
    // }

  };


  return (
    <Layout style={{ height: '100vh' }}>
      <SiderStyled theme={'light'} trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <img src="/images/richard.png" />
          <span>Ronald Richard</span>
        </div>
        <div className="collapsable">
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={onClick}
          items={[
            {
              key: '1',
              icon: <CalendarOutlined />,
              label: 'Calendar',
            },
            {
              key: '2',
              icon: <EditOutlined />,
              label: 'Services',
            },
            {
              key: '/login',
              icon: <UserSwitchOutlined />,
              label: 'Customers',
            },
            {
              key: '4',
              icon: <TeamOutlined />,
              label: 'Teams',
            },
            {
              key: '5',
              icon: <UserOutlined />,
              label: 'Employees',
            },
            {
              key: '6',
              icon: <ScheduleOutlined />,
              label: 'Schedule Services',
            },
            {
              key: '7',
              icon: <QuestionCircleOutlined />,
              label: 'Pending Requests',
            },
            {
              key: '8',
              icon: <BellOutlined />,
              label: 'Notifications',
            },
            {
              key: '9',
              icon: <UserOutlined />,
              label: 'Profile',
            },
          ]}
        />
      </SiderStyled>
      <Layout className="site-layout">
        <MyHeader {...props.headerProps} />
        <Content className="site-layout-background">
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MyLayout;


const SiderStyled = styled(Sider)`
.logo{
  margin-top: 38px;
}
.ant-menu {
  background-color: #fff;
}
  .ant-menu-item {
    background: #fff !important;
    color: #121212;
    &:hover {
      color: blue !important;
    }
  }
  .ant-menu-item-selected {
    span {
      background: #fff !important;
    color: green !important;
    }
   
  }
`;