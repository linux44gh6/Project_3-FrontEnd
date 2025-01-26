import { Menu, Layout } from "antd";
import { navbarItemsGenerator } from "../Utils/NavBarGenarator";
import userPath from "../Routes/UserRoute";

const { Header: AntHeader } = Layout;

const Header = () => {
  let navItme = navbarItemsGenerator(userPath, "user");

  return (
    <AntHeader style={{ display: "flex", alignItems: "center" }}>
      <h1 style={{ flex: 1 }} className="text-red-300">
        this is Layout
      </h1>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={navItme} // Replaced 'items' with 'navItme'
        style={{ flex: 1, minWidth: 0 }}
      />
    </AntHeader>
  );
};

export default Header;
