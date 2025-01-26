import { Breadcrumb, Layout, Menu, theme } from "antd";

import Header from "./Header";
const { Content, Footer } = Layout;
const MainLayout = () => {
  return (
    <Layout>
      <Header />
      <Content>
        <div>Content</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default MainLayout;
