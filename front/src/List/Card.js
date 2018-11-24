import React from 'react';
import styled from 'styled-components';
import { colors } from '../theme';

const Wrapper = styled.div`
    background: ${props => props.isPromo ? colors.promo : colors.white};
    border-radius: 8px;
    padding: 8px;
    display: flex;
    flex-flow: column nowrap;
    margin: 0 0 8px 0;
`;

const Title = styled.div`
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    & span {
        color: ${colors.basic};
    }
`;

const Subtitle = styled.div`
    font-size: 12px;
    line-height: 14px;
    color: ${colors.primary}
`;

const Desc = styled.div`
    background: ${props => props.isPromo ? colors.promo : colors.white};
    padding: 16px;
    font-size: 16px;
    line-height: 18px;
    border-radius: 8px;
`;

const Bottom = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
`;

const Button = styled.button`
    padding: 8px;
    border-radius: 4px;
    border: none;
    background: ${colors.primary}
    text-transform: uppercase;
    font-size: 12px;
    color: ${colors.white}
`;

export default function Card(props) {
    return (
        <Wrapper isPromo={props.isPromo}>
            <Title>
                <span>{props.title}</span>
                <span>0/5</span>
            </Title>
            <Subtitle>От В.Пупкина</Subtitle>
            <Desc isPromo={props.isPromo}>
                {props.desc}
            </Desc>
            <Bottom>
                <Button>Присоединиться</Button>
            </Bottom>
        </Wrapper>
    );
}