import styled, { keyframes } from 'styled-components';

const hover = keyframes`
    0% { transform: translateX(0); }
    50% { transform: translateX(-5px); }
    100% { transform: translateX(0); }
`;

export const Container = styled.div`
    grid-area: menu;
    width: ${ ({ isMenuHidden }) => isMenuHidden ? '4vw' : '20vw' };
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    position: fixed;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    background-color: var(--primary-bg-color);
    transition: width .3s ease;
`;

export const Header = styled.div`
    width: 100%;
    padding: 20px 10px;

    background-color: var(--secondary-bg-color);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: ${ ({ isMenuHidden }) => isMenuHidden ? '60px' : '250px' };
        max-width: 100%;
    }
`;

export const Items = styled.div`
    width: 100%;
    padding: 25px 10px;

    display: flex;
    flex-direction: ${ ({ isMenuHidden }) => isMenuHidden ? 'column' : 'row' };
    justify-content: ${ ({ isMenuHidden }) => isMenuHidden ? 'center' : 'space-between' };
    align-items: center;

    border-bottom: 1px solid var(--secondary-bg-color);
    color: var(--primary-light-font-color);
    font-size: 1.2rem;
    cursor: pointer;

    div > span {
        margin-right: ${ ({ isMenuHidden }) => isMenuHidden ? '0' : '5px' };
    }

    span {
        opacity: .6;
        color: var(--secondary-light-font-color);
        font-size: ${ ({ isMenuHidden }) => isMenuHidden ? '1.8rem' : '1.4rem' };
        font-weight: 800;
    }

    span.arrow {
        font-size: 1rem;
    }

    &:hover {
        background-color: #1F2937;

        span.arrow {
            animation: .3s ${ hover } ease;
        }
    }
`;

export const ButtonClose = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    div.wrapper {
        width: 4vw;
        height: 4vw;
        margin: ${ ({ isMenuHidden }) => isMenuHidden ? '0' : '0 10px 3px 0' };
        border-radius: ${ ({ isMenuHidden }) => isMenuHidden ? '0' : '4vw' };

        display: flex;
        justify-content: center;
        align-items: center;
        
        background-color: var(--secondary-bg-color);
        color: var(--secondary-light-font-color);
        font-size: 1.5rem;
        font-weight: 400;
        cursor: pointer;

        
        transition: border-radius .2s ease-in-out;
        transition: opacity .3s ease;
        
        span {
            transform: rotate(${ ({ isMenuHidden }) => isMenuHidden ? '180deg' : '0' });
            transition: transform .3s ease-in-out;
        }

        &:hover{
            opacity: .7;
        }
    }
`;

