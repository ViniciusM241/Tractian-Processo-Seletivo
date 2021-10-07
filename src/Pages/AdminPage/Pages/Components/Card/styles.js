import styled from 'styled-components';

export const Container = styled.div`
    min-width: 150px;
    min-height: 150px;
    padding: 10px 20px;
    margin: 5px 0;

    background-color: var(--primary-light-bg-color);
    border: .5px solid #B8B8B8B8;
    border-radius: 3px;

    div.header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
    }
`;

export const Title = styled.h2`
    font-size: 1.3rem;
    color: var(--primary-font-color);
    margin: 0;
`;

export const Subtitle = styled.span`
    font-size: .9rem;
    color: var(--primary-font-color);
    opacity: .53;
    margin: 0;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;