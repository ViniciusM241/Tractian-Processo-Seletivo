import styled from 'styled-components';

export const ItemContainer = styled.div`
    width: 100%;
    height: 30px;
    border-radius: 5px;
    padding: 10px 15px;
    transition: background-color .3s ease;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    cursor: pointer;

    color: #333333;
    font-size: 1rem;

    &:hover {
        background-color: #EBEBEB;
    }
`;