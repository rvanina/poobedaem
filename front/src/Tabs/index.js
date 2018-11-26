import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../theme';

const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100vw;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 8px 20px;
  color: ${colors.headerMainFont};
  background: ${colors.primary};
`;

const Button = styled(Link)`
  color: ${colors.headerMainFont};
  font-size: 24px;
`;

export default function Tabs() {
  return (
    <Wrapper>
      <Nav>
        <Button to="/Profile">
          <i className="mdi mdi-menu" />
        </Button>
        <Button to="/">
          <i className="mdi mdi-menu" />
        </Button>
        <Button to="/Profile">
          <i className="mdi mdi-menu" />
        </Button>
        <Button to="/Profile">
          <i className="mdi mdi-menu" />
        </Button>
      </Nav>
    </Wrapper>
  );
}
