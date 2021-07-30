import styled from 'styled-components'

const StyledWrapper = styled.div`
    text-align: center;
    margin: 30px;
    .section-container {
        background-color: #ffe2e2;
        padding: 50px;
        max-width: 500px;
        margin: auto;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    .description-container {
        h1{
            margin: 0;
            color: #ec7dbd;
            text-shadow: 2px 2px black;
        }
        p {
            padding: 10px;
            text-align: start;
        }
    }
    img {
        max-width:100%;
    }

    @media (max-width: 600px) {
        margin: 40px 0 10px 0px;
        .section-container {
            padding: 0px;
            padding-top: 20px;
        }
        img {
            width: 100%;
        }
    }
`;


export default StyledWrapper;