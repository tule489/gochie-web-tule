import * as React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Input } from 'antd';
import logo from './Assets/logo.png';
import searching_icon from './Assets/searching-icon.svg';

const { Header, Content, Sider } = Layout;

const searchingIcon = (
  <div style={{ backgroundImage: `url(${searching_icon})` }}></div>
);

const Profile = () => {
  return (
    <Layout className="container">
      <Header className="header">
        <img src={logo} />
        <Input.Search
          className="searching-header"
          prefix={searchingIcon}
          size="large"
        />
      </Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
    </Layout>
  );
};

export default Profile;
