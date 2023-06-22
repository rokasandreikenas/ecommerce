import { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useProducts } from "../../hooks/products";
import { screenSize } from "../../consts/mediaQueries";
import { lightBorderColor } from "../../consts/colors";
import { euroSymbol } from "../../consts/currency";
import Button from "../../components/Button/Button";
import { CartContext } from "../../contexts/CartContext";
import { toast } from "react-hot-toast";

const Product = () => {
  const { productId } = useParams();
  const { handleAddToCart } = useContext(CartContext);
  const { data, isLoading } = useProducts();
  const products = data || [];

  const product = products.find((product) => product.id === Number(productId));

  const handleAddProduct = () => {
    handleAddToCart(product);
    toast.success("Added to cart");
  };

  if (isLoading) {
    return <div>Kraunasi...</div>;
  }

  if (!product) {
    return <div>Produkto nėra!</div>;
  }

  return (
    <Container>
      <PhotoSide>
        <img src={product.picUrl[0]} alt={product.name} />
      </PhotoSide>
      <InfoSide>
        <Title>{product.name}</Title>
        <Price>
          {euroSymbol}
          {product.price}
        </Price>
        <Description>{product.description}</Description>
        <FullWidthButton onClick={handleAddProduct}>
          Add to Cart
        </FullWidthButton>
      </InfoSide>
    </Container>
  );
};

export default Product;

const Container = styled.div`
  max-width: ${screenSize.tablet};
  margin: 40px auto;
  display: flex;
`;

const PhotoSide = styled.div`
  width: 60%;
  margin-right: 48px;

  img {
    width: 100%;
    object-fit: contain;
    border-radius: 5px;
    border: 1px solid ${lightBorderColor};
  }
`;

const InfoSide = styled.div`
  width: 40%;
`;

const Title = styled.p`
  font-size: 24px;
  margin-bottom: 4px;
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 16px;
`;

const Price = styled.p`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const FullWidthButton = styled(Button)`
  width: 100%;
`;
