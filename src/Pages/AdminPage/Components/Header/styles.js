import styled from 'styled-components';

export const Container = styled.div`
    /* width: 100%; */
    position: sticky;
    top: 0;
`;

export const Top = styled.div`
    height: 80px;
    padding: 0 15px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: var(--primary-light-bg-color);
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 20px;
    align-items: center;
`;

export const Notifications = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    span.bell {
        font-size: 1.4rem;
        color: #929299;
        cursor: pointer;
    }


    transition: background-color .3s ease;

    &:hover {
        background-color: #EEEEEE;
    }
`;

export const Profile = styled.div`

`;

export const Bottom = styled.div`
    padding: 10px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;


    background-color: var(--primary-light-bg-color);
    border-bottom: .5px solid rgba(0, 0, 0, .20);
    box-shadow: 0 1px 3px rgba(0, 0, 0, .25);
`;

export const StyledLink = styled.a`
    color: ${ props => props.active ? 'var(--primary-color)' : 'var(--secondary-font-color)' };
    font-size: 1rem;
    cursor: default;
    margin-left: 10px;

    transition: text-decoration linear .2s;

    &:hover {
        text-decoration: ${ props => props.active ? 'underline' : 'none' };
    }
`;