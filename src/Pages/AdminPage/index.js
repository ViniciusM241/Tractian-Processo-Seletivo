import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import { Container, Wrapper, Main } from './styles';
import Menu from './Components/Menu';
import Header from './Components/Header';

import Monitor from './Pages/Monitor';
import Assets from './Pages/Assets';
import Employees from './Pages/Employees';
import Profile from './Pages/Profile';
import Units from './Pages/Units';

import api from '../../services/api';

function AdminPage () {

    const isMenuHidden = useState(Number(localStorage.getItem('@show-menu-bar')));
    const [ assets, setAssets ] = useState([]);
    const [ units, setUnits ] = useState([]);
    const [ currentUnit, setCurrentUnit ] = useState(0);
    const [ company, setCompany ] = useState([]);
    const [ unreadNotifications, setUnreadNotifications ] = useState([]);

    useEffect(() => {
        api.get('/units')
            .then(({ data }) => {
                setUnits(data);
            })
            .catch(error => {
                console.log(error);
                // Show error
            });
        api.get('/companies')
            .then(({ data }) => {
                setCompany(data[0]);
            })
            .catch(error => {
                console.log(error);
                // Show error
            });
    }, []);

    useEffect(() => {
        const getNotifications = (data) => {
            const unreadNotifications = data.reduce((result, item) => {
                if (item.unitId !== currentUnit && currentUnit !== 0 )
                    return result;
                if (item.status === 'inDowntime') {
                    result.push({
                        type: 'error',
                        text: `🚩 ${ item.name } em parada`,
                        to: `/assets/#${ item.id }`
                    });
                }
            
                if (item.status === 'inAlert') {
                    result.push({
                        type: 'warning',
                        text: `⚠ ${ item.name } em alerta`,
                        to: `/assets/#${ item.id }`
                    });
                }
                return result;
            }, []);
            return unreadNotifications;
        };

        api.get('/assets')
            .then(({ data }) => {
                const units = currentUnit === 0 ? data : data.filter(data => data.unitId === currentUnit);
                setAssets(units);
                setUnreadNotifications(getNotifications(units));
            })
            .catch(error => {
                console.log(error);
                // Show error
            });

    }, [currentUnit])

    return (
        <Container>
            <Menu isMenuHidden={ isMenuHidden } />
            <Wrapper isMenuHidden={ isMenuHidden[0] } >
                <Header 
                    unreadNotifications={ unreadNotifications } 
                    units={ units } 
                    company={ company }
                    currentUnit={ currentUnit }
                    setCurrentUnit={ setCurrentUnit }
                />
                <Main>
                    <Route exact path="/monitor/" component={ () => <Monitor currentUnit={ currentUnit } assets={ assets } /> } />
                    <Route path="/monitor/assets" component={ () => <Assets currentUnit={ currentUnit } assets={ assets } /> } />
                    <Route path="/monitor/units" component={ () => <Units /> } />
                    <Route path="/monitor/employees" component={ () => <Employees currentUnit={ currentUnit } /> } />
                    <Route path="/monitor/profile" component={ () => <Profile currentUnit={ currentUnit } /> } />
                </Main>
            </Wrapper>
        </Container>
    );
}

export default AdminPage;