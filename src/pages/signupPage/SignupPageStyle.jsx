import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 3em 1.2em 0em 2.8em;
`
export const HeaderText = styled.h1`
    font-weight: 700;
    font-size: 4.5em;
    line-height: 1.4em;
    font-family: 'IBM Plex Sans', sans-serif;
    color: #373737;
    margin: .7em 0 5em 0;
`
export const FormArticle = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Section = styled.section`
    width: 53em;
    height: 6em;
    margin-bottom: 1.10em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`
export const Input = styled.input`
    width: 99%;
    height: 99%;
    border: solid .5px rgb(188, 184, 184);
    border-radius: 5px;
`
export const ErrorMessage = styled.div`
margin: .5em 0 0 0;
display: flex;
flex-direction: row;
align-items: center;

& p{
    color: red;
    font-size: 1.6em;
    font-weight: 700;
    line-height: 1.8em;
    font-family: 'IBM Plex Sans', sans-serif;
}
`
export const VisibilityBtn = styled.div`
    position: absolute;
    right: 7.8em;
    top: 65.4em; 

    .fa-eye-slash,
    .fa-eye{
        color: #cdcaca;
        scale: 1.8;
    }
`
export const PolicySection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding: ${(props) => {
        if(props.$checkError){
            return '3.8em 1.6em 0 0'
            
        }else{
            return '4em 1.6em 0 0'
        }  
    }};
    font-family: 'Noto Sans', sans-serif;
    font-size: 1.7em;
    line-height: 1.8em;
   
    & p{
        text-justify: auto;
        color: #000;
        font-weight: 400;
        margin-bottom: .5em;
    };

    & a{
        color: #4088CB;
        text-decoration: none;
        font-weight: 500;

        &:active{
            text-decoration: underline;
        }
    };

    & span{
        font-weight: 400;
        margin-bottom: 1.7em;
        display: flex;
        flex-direction: row;
        gap: .7em;

        & p{
            padding-top: .6em;
        }; 
    }
`
export const SignupBtn = styled.button`
    height: 3em;
    width: 22.9em;
    border-radius: 6em;
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