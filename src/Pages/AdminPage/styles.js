import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;

    display: grid;
    grid-template-columns: min-content minmax(80%, 96%);
    grid-template-areas: "menu section section";

    background-color: var(--bg-color);
`;

export const Wrapper = styled.div`
    grid-area: section;
    margin-left: ${ ({ isMenuHidden }) => isMenuHidden ? '4vw' : '16.1vw' };
    transition: margin .3s ease;
    height: 100%;

    display: flex;
    flex-direction: column;
`;

export const Main = styled.main`
    
`;