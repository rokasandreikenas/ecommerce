import styled from "styled-components";
import { searchBgColor } from "../../consts/colors";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ value, setValue }) => {
  return (
    <InputWrapper>
      <AiOutlineSearch />
      <Input
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </InputWrapper>
  );
};

export default SearchBar;

const InputWrapper = styled.div`
  position: relative;

  svg {
    font-size: 22px;
    position: absolute;
    left: 12px;
    top: 5px;
  }
`;

const Input = styled.input`
  background-color: ${searchBgColor};
  border: none;
  outline: none;
  padding: 8px 40px;
  border-radius: 4px;
`;
