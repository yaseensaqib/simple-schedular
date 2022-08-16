import {
  EnvironmentOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react';
import MyLayout from '../components/mylayout';
import styled from 'styled-components';


const Profile = () => {

  const MyHeaderTitle = () => {
    return <h2>My Profile</h2>
  }

  const headerProps = {
    title: <MyHeaderTitle />,
    html: '', // set the html empty in case when only need to show title of the page
  };

  return (
    <MyLayout headerProps={headerProps}>
      <div className="login-bg" style={{ height: '100%', padding: '40px' }}>
        <Wrapper>
          <img src="/images/richard-profile.png" />
          <h2>Ronald Richards</h2>
          <h6>Maid Service LLC</h6>
          <p><EnvironmentOutlined /> 3517 W. Gray St. Utica, Pennsylvania 57867</p>
          <p><PhoneOutlined /> (308) 555-0121</p>
          <button type="primary" className="btn-success">
            <span>Edit</span>
          </button>
        </Wrapper>
      </div>
    </MyLayout>

  );
};

export default Profile;

const Wrapper = styled.div`
  background-color: #FFF;
  border: 1px solid #e8e8e8;
  border-radius: 15px;
  height: 100%;
  opacity: 0.9;
  padding: 50px;
 text-align: center;
 h2{
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 41px;
  margin-top: 40px;
 }
 h6{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
 }
 p{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #000;
  opacity: 0.5;
 }
 .btn-success{
  width: 207px;
  height: 52px;
 }
 .btn-success span{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #FFFFFF;
 }
`;