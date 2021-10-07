import React from 'react';
import Card from '../Components/Card';
import VariablePie from './Charts/VariablePie';
import Linear from './Charts/Linear';

import { Container } from './styles';


function Monitor (props) {

    return (
        <Container>
            <div>
                <Card title="Ativos" subtitle="Informações gerais" >
                    <VariablePie assets={ props.assets } />
                </Card>
            </div>
            <Card title="Consumo de energia" subtitle="Todos os ativos da unidade" >
                <Linear assets={ props.assets } />
                
            </Card>
        </Container>
    );
}

export default Monitor;