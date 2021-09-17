import styled from 'styled-components';

export const Container = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    span.bell {
        font-size: 1.3rem;
        color: #929299;
        cursor: pointer;
    }


    transition: background-color .3s ease;

    &:hover {
        background-color: #EEEEEE;
    }
`;

export const ItemContainer = styled.div`
    width: 100%;
    height: 30px;
    border-radius: 5px;
    transition: background-color .3s ease;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    color: #333333;
    font-size: .9rem;

    div.color {
        background-color: ${ ({ bgColor }) => bgColor };
        width: 5px;
        height: 100%;
    }

    &:hover {
        background-color: #EBEBEB;
    }
`;