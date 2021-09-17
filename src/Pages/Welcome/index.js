import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { Container } from './styles';
import { useHistory } from 'react-router-dom'
import api from '../../services/api';

function Welcome (props) {

    const [ company, setCompany ] = useState({})
    const history = useHistory();

    useEffect(() => {
        api.get('/companies')
            .then(({ data }) => {
                setCompany(data[0]);
            })
            .catch(error => {
                console.log(error);
                // Show error
            });
    }, []);

    return (
        <Container>
            <h1> Bem vindo(a) ao painel de administração <br /> da sua empresa <span>{ company.name }</span>! </h1>
            <h2> Clique no botão abaixo para acessá-lo </h2>
            <Button 
                type="primary"
                size="large"
                shape="round"
                onClick={ () => history.push("/monitor") }
            > 
                Acessar Plataforma 
            </Button>
        </Container>
    );
}

export default Welcome;