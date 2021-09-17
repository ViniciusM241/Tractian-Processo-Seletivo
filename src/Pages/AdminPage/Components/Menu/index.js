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

import logo from '../../../../Assets/logo.png';
import logoMin from '../../../../Assets/logo_min.png';

const menuItems = [
    { 
        name: 'Monitoramento',
        Icon: AlertOutlined
    },
    { 
        name: 'Ativos',
        Icon: ApartmentOutlined
    },
    { 
        name: 'Unidades',
        Icon: GoldOutlined
    },
    { 
        name: 'Funcionários',
        Icon: UsergroupAddOutlined
    },
];

function Menu (props) {

    const [ isMenuHidden, setIsMenuHidden ] = props.isMenuHidden;

    const Item = (props) => {

        return (
            <Items isMenuHidden={ isMenuHidden }>
                <div>
                    { React.createElement(props.Icon) }
                    { isMenuHidden || props.children }
                </div>
                { isMenuHidden || <RightOutlined className="arrow" /> }
            </Items>
        );
    }

    return (
        <Container isMenuHidden={ isMenuHidden }>
            <Header isMenuHidden={ isMenuHidden }>
                <img src={ isMenuHidden ? logoMin : logo } alt="Tractian Logo" />
            </Header>
            {
                menuItems.map((item, index) => (<Item key={ index } Icon={ item.Icon } > { item.name } </Item>))
            }
            <ButtonClose isMenuHidden={ isMenuHidden } >
                <div className="wrapper" onClick={ () => setIsMenuHidden(!isMenuHidden) } >
                    <DoubleLeftOutlined />
                </div>
            </ButtonClose>
        </Container>
    );
}

export default Menu;