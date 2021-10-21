import React from "react";
import { Button, Tag } from "antd";
import { PercentageOutlined } from "@ant-design/icons";
export default function SellerCard(props) {
  return (
    <div className="container">
      <div className="row">
        <div>
          <div className="card">
            <div className="image">
              <img
                src={props.data.img} 
                width="100%"
              />
            </div>

            <div className="text">
              <h3>
                {props.data.name} <Tag color="magenta">تایید شده</Tag>
              </h3>
              <p className="seller-description">{props.data.description}</p>
            </div>
            <div className="seller-commission">
              کمیسیون :‌ {props.data.commision}  <PercentageOutlined />
            </div>
            <div className="seller-buy">
              <Button>مشاهده محصولات</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
