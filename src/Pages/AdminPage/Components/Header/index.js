import React from 'react';

import { Container, Top, Notifications, Profile, ProfilePhoto, Bottom } from './styles';
import { BellFilled } from '@ant-design/icons';

function Header (props) {

    return (
        <Container>
            <Top>
                    {/* <DDUnit /> */}
                <div>
                    <Notifications>
                        <BellFilled />
                    </Notifications>
                    <Profile>
                        <ProfilePhoto />
                    </Profile>
                </div>
            </Top>
            <Bottom>

            </Bottom>
        </Container>
    );
}

export default Header;