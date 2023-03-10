import React from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  line-height: 20px;
`;
const Button = styled.button`
  background: #ffffff;
  border: 1px solid #dae0e6;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.04);
  border-radius: 5px;
  padding: 7px;
  width: 40px;
  height: 40px;
  svg {
    width: 100%;
    height: 100%;
  }
`;
const Header = ({ children }) => {
  return (
    <StyledHeader>
      <Button>
        <MdKeyboardArrowLeft />
      </Button>
      {children}
      <Button>
        <MdKeyboardArrowRight />
      </Button>
    </StyledHeader>
  );
};

export default Header;
