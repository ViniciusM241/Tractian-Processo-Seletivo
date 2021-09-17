import styled from "styled-components";

export const Container = styled.div`
    height: 80vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    text-align: center;

    h1 {
        font-size: 1.7rem;
        margin-bottom: 20px;
        font-weight: 400;

        span {
            font-weight: 600;
        }
    }

    h2 {
        font-size: 1rem;
        /* opacity: .6; */
        color: var(--primary-color);
        margin-bottom: 70px;
    }
`;