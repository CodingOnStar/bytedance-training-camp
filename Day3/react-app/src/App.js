import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Input, Menu, Row, Col, Icon } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";

function App() {
  return (
    <div className="App">
      <Row>
        <Col>
          <a id="logo" href="/">
            <img
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            ></img>
            Ant Design
          </a>
        </Col>
        <Col flex="1">
          <div id="searchbox">
            <Input placeholder="搜索"></Input>
          </div>
        </Col>
        <Col>
          <Menu mode="horizontal" id="menu">
            <Menu.Item>设计</Menu.Item>
            <Menu.Item>文档</Menu.Item>
            <Menu.Item>组件</Menu.Item>
            <Menu.Item>资源</Menu.Item>
            <Menu.Item>国内镜像</Menu.Item>
            <Menu.SubMenu title="子菜单" icon={<UnorderedListOutlined />}>
              <Menu.Item>子菜单项</Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Col>
      </Row>
      <Row justify="center">
        <div id="biglogo">
          <img
            alt="logo"
            src="https://gw.alipayobjects.com/zos/antfincdn/6UYtAUYPXE/AntDesign.svg"
          ></img>
        </div>
      </Row>
    </div>
  );
}

export default App;
