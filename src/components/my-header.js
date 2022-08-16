import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
const { Header } = Layout;



const MyHeader = (props) => {
  console.log(props);
  console.log(props.title);
  console.log(props.html);
  return <Header className="site-layout-background">
    <HeaderStyled>
      <div> {props.html ? props.html : props.title}</div>
      <img src='/images/logo.png' />
    </HeaderStyled>
  </Header >
};

export default MyHeader;


const HeaderStyled = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding-top: 16px;
img {
  height:74px;
  width:200px;
}
`;