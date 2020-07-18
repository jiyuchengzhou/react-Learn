import React, { Component } from "react";
import { Button, Typography, Row, Col } from "antd";
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
const { Title, Text } = Typography;

export default class antd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      str: "123456",
    };
  }
  onChange = (str) => {
    console.log(str);
    this.setState({
      str,
    });
  };
  render() {
    return (
      <div>
        {/* 按钮与图标 */}
        {/* <div>
          <Button type="primary" shape="circle">
            Primary Button
          </Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <br />
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
          <br />
          <HomeOutlined />
          <SettingFilled />
          <SmileOutlined />
          <SyncOutlined spin />
          <SmileOutlined rotate={180} />
          <LoadingOutlined />
        </div> */}
        {/* 标题 */}
        {/* <div>
          <Title>h1. Ant Design</Title>
          <Title level={2}>h2. Ant Design</Title>
          <Title level={3}>h3. Ant Design</Title>
          <Title level={4}>h4. Ant Design</Title>
          <Text editable={{ onChange: this.onChange }}>{this.state.str}</Text>
          <Text editable={{ onChange: this.onChange }}>{this.state.str}</Text>
        </div> */}
        {/* 栅格布局 */}
        <div>
          <Row>
            <Col style={{ background: "red" }} span={24}>
              col
            </Col>
          </Row>
          <div style={{ 'width':'100%','background':'yellow','height':'100px' }}>
            <Row gutter={[16]}>
              <Col style={{ background: "green",}} span={12}>
                col-12
              </Col>
              <Col style={{ background: "blue",}} span={12}>
                col-12
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
