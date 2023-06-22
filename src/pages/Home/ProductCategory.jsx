import styled from "styled-components";
import { useNavigate, generatePath } from "react-router-dom";
import { PRODUCT_LIST_PATH } from "../../routes/const";

const ProductCategory = ({ name, image }) => {
  const navigate = useNavigate();
  const productPath = generatePath(PRODUCT_LIST_PATH, { category: name });

  return (
    <ProductItem onClick={() => navigate(productPath)}>
      <div>
        <p>{name}</p>
        <span>13</span>
      </div>
      <img src={image} alt={name} />
    </ProductItem>
  );
};

export default ProductCategory;

const ProductItem = styled.div`
  width: 20%;
  text-transform: uppercase;
  background-color: #ffffff;
  margin: 16px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  &:hover {
    cursor: pointer;
  }

  div {
    display: flex;
    justify-content: space-between;
    padding: 16px;

    p {
      margin: 0;
      font-weight: 500;
    }
  }

  img {
    width: 100%;
  }
`;
