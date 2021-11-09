import styled from 'styled-components'

export const Div = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    background: #DDDDDD;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

export const DivBox = styled.div`
    width: 500px;
    height: 220px;
    margin-top: 200px;
    padding: 20px;

    background: #FFFFFF;
    border: 2px solid #CCCCCC;
    box-sizing: border-box;
    box-shadow: 10px 10px 10px #CCCCCC;

    > .welcome-title {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 1.25em;
        line-height: 1.563em;

        margin-bottom: 18px;
    }

    > .welcome-subtitle {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 1em;
        line-height: 19px;

        margin-bottom: 15px;
        color: #000000;
    }

    > .username-input{
        width: 98%;
        height: 28px;


        background: #FFFFFF;
        border: 1px solid #777777;
        box-sizing: border-box;
        border-radius: 4px;
        ::placeholder {
            padding-left: 5px;

            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;

            color: #CCCCCC;
        }
    }

    > .sign-up-btn{
        width: 24%;
        height: 33px;

        background: #000000;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 1em;
        line-height: 1.188em;
        color: #FFFFFF;
        
        margin-left: 74%;
        margin-top: 18px;
        cursor: pointer;
        @media (max-width: 315px) {
            width: 100%;
            margin: 0 auto;
            margin-top: 15px;
        }
    }

    @media (max-width: 525px) {
        width: 95%;
        height: 40%;
    }
`;


