import React from 'react';

import { Container, Title, Subtitle, Content } from './styles';

function Card (props) {

    return (
        <Container>
            <div className="header">
                <Title> { props.title } </Title>
                <Subtitle> { props.subtitle } </Subtitle>
            </div>
            <Content>
                { props.children }
            </Content>
        </Container>
    );
}

export default Card;