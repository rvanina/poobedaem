import React from 'react';
import styled from 'styled-components';
import { colors } from '../theme';

const Wrapper = styled.header`
  background: ${colors.primary};
  color: ${colors.headerMainFont};
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  padding: 8px;
  font-size: 20px;
  font-family: 'Lobster';
`;

const SidebarButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  color: ${colors.headerMainFont}
`;

export default function Header() {
  return (
    <Wrapper>
      {/* <SidebarButton>
        <i className="mdi mdi-menu mdi-24px" />
      </SidebarButton> */}
      Пообедаем?
    </Wrapper>
  );
}
