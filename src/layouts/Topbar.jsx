import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { lightBorderColor } from "../consts/colors";
import EnhancedSearchBar from "../components/SearchBar/EnhancedSearchBar";
import { HOME_PATH, CART_PATH, LOGIN_PATH } from "../routes/const";
import { FaShoppingCart, FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import CategoriesButton from "../components/CategoriesButton/CategoriesButton";

const Topbar = () => {
  const { isLoggedIn, handleLogOut } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClickSign = () => {
    if (isLoggedIn) {
      handleLogOut();
      navigate(HOME_PATH);
      toast.success("Successfully logged out!");
    } else {
      navigate(LOGIN_PATH);
    }
  };

  return (
    <Container>
      <CategoriesButton />
      <Logo as={Link} to={HOME_PATH}>
        POHSE
      </Logo>
      <ItemContainer>
        <EnhancedSearchBar />
        <Link to={CART_PATH}>
          <FaShoppingCart fontSize={20} />
        </Link>
        <SignContainer onClick={handleClickSign}>
          {isLoggedIn ? (
            <FaSignOutAlt fontSize={20} />
          ) : (
            <FaSignInAlt fontSize={20} />
          )}
        </SignContainer>
      </ItemContainer>
    </Container>
  );
};

export default Topbar;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Container = styled.div`
  padding: 6px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${lightBorderColor};
  background-color: #ffffff;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 28px;
  text-decoration: none;
  color: inherit;
`;

const SignContainer = styled.div`
  cursor: pointer;
`;
