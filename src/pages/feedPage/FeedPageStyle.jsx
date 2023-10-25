import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const FormArticle = styled.article`
    margin-top: 3em ;
`
export const Input = styled.input`
    background-color:#EDEDED;
    height: 7em;
    width: 24em;
    border: none;
    border-radius: .8em;
    margin-bottom: .8em;
    padding-left: 1em;
`
export const PostBtn = styled.button`
    height: 3em;
    width: 21.8em;
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
    margin: 2em 0;
`
export const PostsArticle = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`