import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "antd/dist/antd.css";
import Sidebar from "../components/sidebar";
import { Row, Col } from "antd";
import Header from "../components/header";
import Sellers from "../components/sellers";

export default function Home() {
  return (
    <Row className={styles.container}>
      <Col span={20} className="rtl content">
        <Header />
        <Sellers />
      </Col>
      <Col span={4}>
        <Sidebar />
      </Col>
    </Row>
  );
}
