import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 3.5em;
`
export const CardsArticle = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const FormArticle = styled.article``
export const Input = styled.input`
    background-color:#EDEDED;
    height: 7em;
    width: 25em;
    border: none;
    border-radius: .8em;
    margin-bottom: .8em;
    padding-left: 1em;
`
export const ErrorMessage = styled.div`
margin: .5em 0 1em 0;
display: flex;
flex-direction: row;
align-items: center;

    & p{
        color: red;
        font-size: 1.4em;
        font-weight: 700;
        line-height: 1.6em;
        font-family: 'IBM Plex Sans', sans-serif;
    }
`
export const CommentBtn = styled.button`
    height: 3em;
    width: 22.5em;
    border-radius: .7em;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    border: none;
    color: #FFFFFF;
    font-size: 2.3em;
    font-weight: 700;
    line-height: 2.5em;
    font-family: 'IBM Plex Sans', sans-serif;
    
    &:active{
        transform: scale(1.1);
        transition: all ease .5s;
    }
`
export const Divisor = styled.div`
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    height: .2em;
    width: 49.8em;
    margin: 2em 0 ;
`
export const NoMessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20em;
`
export const NoCommentMessage = styled.p`
    margin-top: 3em;
    font-size: 2.5em;
    font-weight: 400;
    line-height: 2.8em;
    font-family: 'IBM Plex Sans', sans-serif;
`