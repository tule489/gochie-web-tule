import * as React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Input, Menu, Row, Col } from 'antd';
import logo from './Assets/logo.png';
import searching_icon from './Assets/searching-icon.svg';
import profile_icon from './Assets/profile-circle.svg';

const { Header, Content, Sider } = Layout;

const searchingIcon = (
  <div
    style={{
      backgroundImage: `url(${searching_icon})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      marginRight: 10,
      width: 16,
      height: 16,
    }}
  ></div>
);

const IconProfile = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${profile_icon})`,
        backgroundSize: 'contain',
        width: 26.67,
        height: 26.67,
        marginRight: 26.67,
      }}
    ></div>
  );
};

const Profile = () => {
  return (
    <div className="container">
      <Layout>
        <Header className="header">
          <img src={logo} />
          <Input.Search
            className="searching-header"
            prefix={searchingIcon}
            size="large"
          />
        </Header>
        <Layout className="wrapper">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col>
              <Sider breakpoint="lg" collapsedWidth="0">
                <Menu>
                  <Menu.Item>
                    <IconProfile />
                    item 1
                  </Menu.Item>
                  <Menu.Item>
                    <IconProfile />
                    item 1
                  </Menu.Item>
                  <Menu.Item>
                    <IconProfile />
                    item 1
                  </Menu.Item>
                  <Menu.Item>
                    <IconProfile />
                    item 1
                  </Menu.Item>
                  <Menu.Item>
                    <IconProfile />
                    item 1
                  </Menu.Item>
                </Menu>
              </Sider>
            </Col>
            <Col>
              <Content className="content">Content</Content>
            </Col>
          </Row>
        </Layout>
      </Layout>
    </div>
  );
};

export default Profile;
