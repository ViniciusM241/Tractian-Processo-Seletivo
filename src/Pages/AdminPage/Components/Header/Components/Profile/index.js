import React, { useState, Fragment } from 'react';
import { Popover, Avatar } from 'antd';
import { Link } from 'react-router-dom';

import { ItemContainer } from './styles';
import profilePicture from '../../../../../../Assets/profile_picture.png';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'

const menuItems = [
    { 
        name: 'Perfil',
        to: '/monitor/profile',
        Icon: UserOutlined
    },
    { 
        name: 'Sair',
        to: '/',
        Icon: LogoutOutlined
    },
];

const content = () => (
    <Fragment>
        {
            menuItems.map((item, index) => {
                return (
                    <Link key={ index } to={ item.to } style={{ width: '100%' }}>
                        <ItemContainer> 
                                { React.createElement(item.Icon) }
                                { item.name }
                        </ItemContainer>
                    </Link>
                )
            })
        }
    </Fragment>
);

function Profile (props) {

    const [ isProfileVisible, setIsProfileVisible ] = useState(false);

    return (
        <Popover
            content={ content }
            title={ props.company.name }
            trigger="hover"
            visible={ isProfileVisible }
            onVisibleChange={ visible => setIsProfileVisible(visible) }
            style={{ overflowY: 'auto' }}
        >
            <Avatar 
                size={ 60 } 
                shape="circle"
                alt="Profile Picture"
                src={ profilePicture }
            />

        </Popover>
    );
}

export default Profile;