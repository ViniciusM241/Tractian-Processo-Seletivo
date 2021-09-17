import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import { Container, Wrapper, Main } from './styles';
import Menu from './Components/Menu';
import Header from './Components/Header';

function AdminPage () {

    const isMenuHidden = useState(false);

    return (
        <Container>
            <Menu isMenuHidden={ isMenuHidden } />
            <Wrapper isMenuHidden={ isMenuHidden[0] } >
                <Header />
                <Main>
                    <Route exact path="/" component={ () => <p> OLA </p> } />
                </Main>
            </Wrapper>
        </Container>
    );
}

export default AdminPage;