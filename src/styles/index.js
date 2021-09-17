import { createGlobalStyle  } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    
    *, :after, :before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, body {
        height: 100%;
    }

    :root {
        --primary-color: #2563EB;
        --secondary-color: #1E3A8A;
        --tertiary-color: #1F2937;
        --primary-bg-color: #1D2633;
        --secondary-bg-color: #273345;
        --primary-font-color: #18181B;
        --secondary-font-color: #52525B;
        --primary-light-font-color: #FFFFFF;
        --secondary-light-font-color: #DBEAFE;
        --success: #54C112;
        --warning: #FFC107;
        --error: #EC2323;
        --secondary: #E2E2E2;
        --bg-color: #E5E5E5;

        font-size: 100%;
        font-family: 'Roboto', sans-serif;
    }
`;

export default GlobalStyle;