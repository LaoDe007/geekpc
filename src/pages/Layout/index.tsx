import React, { useEffect, useState } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
// css modules会自动对样式文件中的所有选择器重命名
import styles from "./index.module.scss";

import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu, Layout, Popconfirm, message } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { getUserProfile } from "../../api/user";

const { Header, Content, Sider } = Layout;

const siderNavRoutes = [
  { label: "数据概览", link: "" },
  { label: "内容管理", link: "list" },
  { label: "发布文章", link: "publish" },
];

const itemsSiderNav: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = ["/home","/home/list","/home/publish"];

  return {
    key: `${key[index]}`,
    icon: React.createElement(icon),
    label: (
      <Link to={siderNavRoutes[index].link}>{siderNavRoutes[index].label}</Link>
    ),
  };
});

export default function LayoutComponent() {
  const initValueProfile: { name: string; age: number } = {
    name: "用户名",
    age: 3,
  };
  const [profile, setProfile] = useState(initValueProfile);
  const {pathname} = useLocation()

  const navigate = useNavigate();
  const confirm = () => {
    navigate("/login");
    message.success("退出成功");
  };

  useEffect(() => {
    (async function getUserInfo() {
      const userInfo = await getUserProfile();
      setProfile(userInfo.data);
    })();
  }, []);

  return (
    <div className={styles.layout}>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <div className="profile">
            <span>{profile.name}</span>
            <span>
              <Popconfirm
                placement="bottomRight"
                title="你确定要退出当前账户吗？"
                onConfirm={confirm}
                okText="确定"
                cancelText="取消"
              >
                <LogoutOutlined />
                &nbsp; 退出登录
              </Popconfirm>
            </span>
          </div>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              theme="dark"
              mode="inline"
              style={{ height: "100%", borderRight: 0 }}
              defaultSelectedKeys={[pathname]}

              items={itemsSiderNav}
            />
          </Sider>
          <Layout style={{ padding: "24px",overflow:'auto' }}>
            <Content className="site-layout-background">
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}
