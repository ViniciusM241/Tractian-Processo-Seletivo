import React from 'react';

import { Container, Header, Items, ButtonClose } from './styles';
import { 
    DoubleLeftOutlined,
    AlertOutlined,
    ApartmentOutlined,
    GoldOutlined,
    UsergroupAddOutlined,
    RightOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom'

import logo from '../../../../Assets/logo.png';
import logoMin from '../../../../Assets/logo_min.png';

const menuItems = [
    { 
        name: 'Monitoramento',
        to: '/monitor',
        Icon: AlertOutlined
    },
    { 
        name: 'Ativos',
        to: '/monitor/assets',
        Icon: ApartmentOutlined
    },
    { 
        name: 'Unidades',
        to: '/monitor/units',
        Icon: GoldOutlined
    },
    { 
        name: 'Funcionários',
        to: '/monitor/employees',
        Icon: UsergroupAddOutlined
    },
];

function Menu (props) {

    const [ isMenuHidden, setIsMenuHidden ] = props.isMenuHidden;

    const Item = (props) => {

        return (
            <Link to={ props.to } style={{ width: '100%' }} >
                <Items isMenuHidden={ isMenuHidden }>
                    <div>
                        { React.createElement(props.Icon) }
                        { isMenuHidden ?  null : props.children }
                    </div>
                    { isMenuHidden ? null : <RightOutlined className="arrow" /> }
                </Items>
            </Link>
        );
    }

    const handleMenu = () => {
        localStorage.removeItem('@show-menu-bar')

        if (isMenuHidden) {
            localStorage.setItem('@show-menu-bar', 0)
            setIsMenuHidden(0);
        }
        else {
            localStorage.setItem('@show-menu-bar', 1)
            setIsMenuHidden(1);
        }
    }

    return (
        <Container isMenuHidden={ isMenuHidden }>
            <Header isMenuHidden={ isMenuHidden }>
                <img src={ isMenuHidden ? logoMin : logo } alt="Tractian Logo" />
            </Header>
            {
                menuItems.map((item, index) => (<Item key={ index } Icon={ item.Icon } to={ item.to } > { item.name } </Item>))
            }
            <ButtonClose isMenuHidden={ isMenuHidden } >
                <div className="wrapper" onClick={ handleMenu } >
                    <DoubleLeftOutlined />
                </div>
            </ButtonClose>
        </Container>
    );
}

export default Menu;