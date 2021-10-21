import { PageHeader, Button, Row, Breadcrumb } from "antd";
import React from "react";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
const routes = [
  {
    path: "index",
    breadcrumbName: "خانه",
  },
  {
    path: "first",
    breadcrumbName: "فروشنده‌ها ",
  },
];

export default function header() {
  return (
    <div>
      <PageHeader
        onBack={() => window.history.back()}
        title="فروشنده‌ها"
        subTitle="در این بخش تمامی فروشنده موجود هستند "
        extra={[
          <Button key="2">بالانس :‌ 2,500,000 ت</Button>,
          <Button key="1" type="primary">
            تسویه حساب
          </Button>,
        ]}
      >
        <Row>
          <Breadcrumb>
            <Breadcrumb.Item href="">
              <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
              <span>فروشنده‌ها</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>دیجی کالا</Breadcrumb.Item>
          </Breadcrumb>
        </Row>
      </PageHeader>
    </div>
  );
}
