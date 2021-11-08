import styled from 'styled-components'

export const Body = styled.div`
    position: absolute;
    width: 100%;
    height: 150%;
    left: 0px;
    top: 0px;
    background: #DDDDDD;

`;

export const Container = styled.div`
    width: 70%;
    height: 99%;
    margin: 0 auto;
    background: #FFFFFF;
`;


export const Header = styled.div`
    width: 100%;
    height: 80px;
    background: #000000;

    > .title-header {
        margin: 0 auto;
        padding: 20px;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 1.375em;
        line-height: 1.625em;
        color: #FFFFFF;
    }
`

export const CreatePostDiv = styled.div`
    width: 90%;
    height: 35%;
    margin: 0 auto;
    margin-top: 50px;
    background: #FFFFFF;
    border: 1px solid #999999;
    box-sizing: border-box;
`;

export const Post = styled.div`
    width: 90%;
    height: 30%;
    margin: 0 auto;
    margin-top: 30px;


    background: #FFFFFF;
    border: 1px solid #999999;
    box-sizing: border-box;
`;