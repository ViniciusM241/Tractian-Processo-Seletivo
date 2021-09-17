import React from 'react';

import { Container, Top, Wrapper, Notifications, Profile, Bottom, StyledLink } from './styles';
import { BellFilled } from '@ant-design/icons';
import { Avatar, Badge, Select } from 'antd';
import { useHistory } from 'react-router';

import profilePicture from '../../../../Assets/profile_picture.png';


const { Option } = Select;

function Header (props) {

    const history = useHistory();
    const histories = [ 'Home', ...history.location.pathname.split('/') ];
    
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
                <Select defaultValue="geral" bordered={ false } style={{ width: '120px' }}>
                    <Option value="geral"> Geral </Option>
                    <Option value="unidade1"> Unidade 1 </Option>
                    <Option value="unidade2"> Unidade 2 </Option>
                </Select>
                <Wrapper>
                    <Notifications>
                        <Badge color="var(--primary-color)" count={5}>
                            <BellFilled className="bell" />
                        </Badge>
                    </Notifications>
                    <Profile>
                        <Avatar 
                            size={ 64 } 
                            shape="circle"
                            alt="Profile Picture"
                            src={ profilePicture } 
                        />
                    </Profile>
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