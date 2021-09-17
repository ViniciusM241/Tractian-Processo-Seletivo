import React, { useState, useEffect, Fragment } from 'react';
import { BellFilled } from '@ant-design/icons';
import { Badge, Popover } from 'antd';
import { useHistory } from 'react-router';

import { Container, ItemContainer } from './styles';

function Notifications (props) {
    
    const [ isNotificationVisible, setIsNotificationVisible ] = useState(false);
    const [ unreadNotifications, setUnreadNotifications ] = useState([]);
    const history = useHistory();

    useEffect(() => {
        setUnreadNotifications(props.unreadNotifications);
    }, [props.unreadNotifications]);

    const handleClick = (index, to) => {
        const newUnreadNotifications = [ ...unreadNotifications ];
        newUnreadNotifications.splice(index, 1);
        setUnreadNotifications(newUnreadNotifications);
        history.push(to);
    }

    const content = () => (
        <Fragment>
            {
                unreadNotifications.map((item, index) => {
                    return ( 
                        <ItemContainer key={ index } bgColor={ `var(--${ item.type })` } onClick={ () => handleClick(index, item.to) }>
                            <div className="color"></div>
                            { item.text }
                        </ItemContainer>
                    );
                })
            }
        </Fragment>
    );

    return (
        <Popover
        content={ content }
        title={ `Você tem ${ unreadNotifications.length } notificações` }
        trigger="click"
        visible={ isNotificationVisible }
        onVisibleChange={ visible => setIsNotificationVisible(visible) }
        style={{ overflowY: 'auto' }}
        >
            <Container>
                <Badge color="var(--primary-color)" count={ unreadNotifications.length }>
                    <BellFilled className="bell" />
                </Badge>
            </Container>
        </Popover>
    );
}

export default Notifications;