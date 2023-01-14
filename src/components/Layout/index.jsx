import { Outlet } from "react-router-dom";
import { Container } from "./styles";

const Layout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};
export default Layout;
