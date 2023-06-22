import Topbar from "./Topbar";
import styled from "styled-components";

const MainLayout = ({ children }) => {
  return (
    <>
      <Topbar />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default MainLayout;

const Wrapper = styled.div`
  padding: 20px 40px;
`;
