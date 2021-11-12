import styled from 'styled-components'

export const Body = styled.div`
    width: 100%;
    height: 150%;
    left: 0px;
    top: 0px;
    background: #DDDDDD;
`;

export const Container = styled.div`
    width: 60%;
    height: 90%;
    margin: 0 auto;
    background: #FFFFFF;
    @media (max-width: 768px) {
        width: 100%;
    }
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
        @media (max-width: 768px) {
            font-size: 1.4em;
            text-align: center;
        }
    }
`

export const CreatePostForm = styled.form`
    width: 90%;
    height: 35%;
    margin: 0 auto;
    margin-top: 5%;
    background: #FFFFFF;
    border: 1px solid #999999;
    box-sizing: border-box;
    padding: 2%;

    > .title-create-post {
        margin-top: -1%;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 1.4em;
        line-height: 1.7em;
        color: #000000;
        @media (max-width: 768px) {
            font-size: 1.2em;
            line-height: 1.2em;
        }

    }

    > .p-create-post {
        margin-bottom: 5px;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 1em;
        line-height: 1.188em;

        color: #000000;

    }

    > .input-create-post {
        width: 100%;
        height: 28px;
        margin-bottom: 20px;
        background: #FFFFFF;
        border: 1px solid #777777;
        box-sizing: border-box;
        border-radius: 4px;

        ::placeholder {
            padding-left: 5px;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 0.875em;
            line-height: 1em;

            color: #CCCCCC;
        }
    }

    > .text-input-create-post {
        width: 100%;
        height: 74px;
        resize: none;
        background: #FFFFFF;
        border: 1px solid #777777;
        box-sizing: border-box;
        border-radius: 4px;

        ::placeholder {
            padding-left: 5px;
            padding:4px;

            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 0.875em;
            line-height: 1em;

            color: #CCCCCC;
        }
    }

    > .button-create-post {
        width: 15%;
        height: 33px;
        margin-top: 20px;
        margin-left: 85%;
        cursor: pointer;
        background: #000000;
        
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 1em;
        line-height: 1.188em;
        color: #FFFFFF;

        @media (max-width: 785px) {
            margin: 0 auto;
            width: 100%;
        }
    }

    > .button-create-post-disabled{
        width: 15%;
        height: 33px;
        margin-top: 20px;
        margin-left: 85%;
        background: #777777;

        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 1em;
        line-height: 1.188em;
        color: #FFFFFF;
        cursor:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>❌</text></svg>") 16 0,auto; /*!emojicursor.app*/
        :hover {
                color: #AEAFB2;
        }


        @media (max-width: 785px) {
            margin: 0 auto;
            width: 100%;
        }
    }

`;

export const Post = styled.div`
    width: 90%;
    height: 30%;
    margin: 0 auto;
    margin-top: 30px;

    background: #FFFFFF;
    border: 1px solid #999999;
    box-sizing: border-box;

    > .header-post{
        width: 100%;
        height: 22%;
        left: 0;
        top: 0;
        display: flex;
        flex-direction: row;
        background: #000000;
        justify-content: space-between;

        > .header-post-title{
            margin-left: 20px;
            padding: 15px;
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 1.375em;
            line-height: 1.625em;

            color: #FFFFFF;

            @media (max-width: 768px) {
            font-size: 1.3em;
            }
            
        }

        > .header-btns-post{
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            margin-right: 30px;
            padding: 3px;
            > .header-post-btn{
                width: 1px;
                height: 1px;
                background: transparent;
                border: none;
                cursor:pointer;
                padding: 15px;
                margin-right: 5px;
                :hover {
                    transform: scale(1.3);
                }

            }
        }

    }

    > .div-info-post{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-left: 30px;
        margin-top: 15px;
        
        > .div-info-username-post{
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 1.125em;
            line-height: 1.313em;

            color: #777777;
        }

        > .div-info-time-post{
            margin-right: 20px;

            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 1.125em;
            line-height: 1.313em;
            text-align: right;

            color: #777777;
        }
    }

    > .content-post{
        width: 95%;
        height: 55%;
        margin: 0 auto;
        margin-top: 15px;
        margin-bottom: 15px;
        
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 1.125em;
        line-height: 1.313em;
        text-align: justify;
        color: #000000;

        @media (max-width: 768px) {
            font-size: 1em;
            line-height: 1em;
        }
    }
`;