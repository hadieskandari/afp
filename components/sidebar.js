import React from "react";
import {
  AppstoreOutlined,
  TagOutlined,
  SmileOutlined,
  DollarCircleOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Avatar, Row, Col, Badge } from "antd";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <Row className="avatar">
        <Col span={12}>
          <div className="avatar-name">هادی اسکندری</div>
          <div className="avatar-price">
            2,500,000 <DollarCircleOutlined />
          </div>
        </Col>
        <Col span={5}>
          <Badge count={5}>
            <Avatar
              src="https://joeschmoe.io/api/v1/random"
              style={{
                backgroundColor: "#08d27b",
                verticalAlign: "middle",
              }}
              size="large"
            >
              هادی
            </Avatar>
          </Badge>
        </Col>
      </Row>
      <div className="sidebar-title-container">
        <div>
          <span className="sidebar-title ">داشبورد</span>
          <AppstoreOutlined color="" />
        </div>
        <div>
          <span className="sidebar-title">پروفایل</span>
          <SmileOutlined twoToneColor="#08d27b" />
        </div>
        <div className="active-title">
          <span className="sidebar-title">فروشنده‌ها</span>
          <TagOutlined color="" />
        </div>
        <div>
          <span className="sidebar-title">بازار</span>
          <ShoppingOutlined color="" />
        </div>
      </div>
    </div>
  );
}
