import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    
    background: #DDDDDD;

    display: flex;
    justify-content: center;
`;

export const Div = styled.div`
    width: 500px;
    height: 220px;
    margin-top: 200px;
    padding: 20px;

    background: #FFFFFF;
    border: 2px solid #CCCCCC;
    box-shadow: 10px 10px 10px #CCCCCC;

    @media (max-width: 525px) {
        width: 95%;
        height: 30%;
    }

    > .welcome-title {
        font-size: 1.25em;
        margin-bottom: 18px;
    }

    > .username-input{
        width: 98%;
        height: 28px;

        background: #FFFFFF;
        border: 1px solid #777777;
        border-radius: 4px;
        margin-bottom: 18px;
        
        ::placeholder {
            padding-left: 5px;
            color: #CCCCCC;
        }
    }

    > .sign-up-btn{
        width: 22%;
        height: 33px;
        margin-top: 20px;
        margin-left: 76%;
        cursor: pointer;
        background: #000000;

        font-size: 1em;
        line-height: 1.188em;
        color: #FFFFFF;

        @media (max-width: 785px) {
            width: 98%;
            margin-top: 10px ;
        }
    }

    > .sign-up-btn-disabled{
        width: 22%;
        height: 33px;
        margin-top: 20px;
        margin-left: 76%;
        background: #777777;

        font-size: 1em;
        line-height: 1.188em;
        color: #FFFFFF;
        cursor:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>❌</text></svg>") 16 0,auto; /*!emojicursor.app*/
        :hover {
                color: #AEAFB2;
        }


        @media (max-width: 785px) {
            margin: 0 auto;
            width: 98%;
        }
    }
`;


