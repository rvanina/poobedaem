import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Wrapper = styled.section`
    display: flex;
    flex-flow: column nowrap;
    padding: 16px;
`;

const items = [
    {
        title: "RE:BRO",
        promo: true,
        desc: 'Приходите с 11:00 до 13:00 и дадим десерт',
    },
    {
        title: "nepromo",
        promo: false,
        desc: 'Эй, го пообщатьсяи поесть со скидкой',
    },
]

export default function List() {
    return (
        <Wrapper>
            {items.map((item, i) => (
                <Card isPromo={item.promo} 
                title={item.title}
                desc={item.desc}
                />
            ))}
        </Wrapper>
    );
}