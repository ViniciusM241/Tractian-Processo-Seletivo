import React from 'react';

import { Container, Top, Wrapper, Bottom, StyledLink } from './styles';
import { Select } from 'antd';
import { useHistory } from 'react-router';
import Notifications from './Components/Notifications';
import Profile from './Components/Profile';

const { Option } = Select;

function Header (props) {

    const history = useHistory();
    const histories = history.location.pathname.split('/');
    
    const History = (props) => {
        const text = props.children.substring(0, 1).toUpperCase() + props.children.substring(1);

        const redirect = () => {
            const index = history.location.pathname.indexOf(text.toLowerCase());
            const path = history.location.pathname.substring(0, index + text.length);
            history.push(path);
        }

        if (text === "")
            return null;
        else
            return <StyledLink active={ props.active } onClick={ redirect }>{ text }&nbsp;{ !props.active? '/' : '' }</StyledLink>;
    }

    return (
        <Container>
            <Top>
                {/* Gerar automático de acordo com o que a API trazer */}
                <Select 
                    defaultValue={ props.currentUnit } 
                    bordered={ false } 
                    style={{ minWidth: '140px', fontSize: '1.2rem', fontWeight: '400' }} 
                    onChange={ (value) => props.setCurrentUnit(value) }
                >
                    <Option value={ 0 }> Geral </Option>
                    {
                        props.units.map(item => {
                            return <Option key={ item.id } value={ item.id }> { item.name } </Option>
                        })
                    }
                </Select>
                <Wrapper>
                    <Notifications unreadNotifications={ props.unreadNotifications } />
                    <Profile company={ props.company } />
                </Wrapper>
            </Top>
            <Bottom>
                {
                    histories.map((elem, index) => {
                        if (index === histories.length - 1)
                            return <History key={ index } active>{ elem }</History>;
                        return <History key={ index }>{ elem }</History>;
                    })
                }
            </Bottom>
        </Container>
    );
}

export default Header;