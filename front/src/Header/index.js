import React from 'react';
import styled from 'styled-components';
import { Menu } from 'styled-icons/material/Menu';
import { colors } from '../theme';

const Wrapper = styled.header`
  background: ${colors.primary};
  color: ${colors.white};
  display: flex;
  padding: 8px;
  font-size: 18px;
`;

export default function Header() {
  return (
    <Wrapper>
      Пообедаем?
    </Wrapper>
  );
}
