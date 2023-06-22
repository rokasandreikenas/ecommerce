import { Formik, Form } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useContext } from "react";
import FormikInput from "../../components/Formik/FormikInput";
import Button from "../../components/Button/Button";
import { screenSize } from "../../consts/mediaQueries";
import { CHECKOUT_PATH, REGISTER_PATH } from "../../routes/const";
import { useLoginUser } from "../../hooks/user";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const Login = () => {
  const { setUser } = useContext(UserContext);
  const { mutateAsync: loginUser } = useLoginUser();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    loginUser(values)
      .then((response) => {
        setUser(response);
        navigate(CHECKOUT_PATH);
        toast.success("Successfully logged in!");
      })
      .catch((error) => {
        console.log("Failed to login:", error);
      });
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <Title>Login</Title>
            <FormikInput type="email" name="email" placeholder="Email" />
            <FormikInput
              type="password"
              name="password"
              placeholder="Password"
            />
            <Button type="submit" disabled={isSubmitting}>
              Login
            </Button>
            <StyledLink to={REGISTER_PATH}>Sign Up</StyledLink>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
};

export default Login;

const StyledForm = styled(Form)`
  max-width: ${screenSize.mobile};
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.p`
  font-size: 24px;
  text-align: center;
  margin-bottom: 16px;
`;

const StyledLink = styled(Link)`
  text-align: center;
  margin-top: 16px;
  font-size: 18px;
`;
