import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
`
export const HeaderLogin = styled.header`
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const ImgLabeddit = styled.img`
    width: 152px;
    height: 142px;
`
export const TextHeader = styled.p`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 300;
    font-size: 1rem;
`
export const ContainerContent = styled.section`
    height: 50%;
    font-family: 'Noto Sans', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
    
    hr{
        width: 330px;
        margin: .5rem 0 1rem 0;
        border: 1px solid #F9B24E;
    }
`
export const InputText = styled.input`
    color: #323941;
    border: 1px solid #D5D8DE;
    border-radius: 4px;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    width: 350px;
    height: 50px;
    padding-left: 17px;
`
export const BtnInput = styled.button`
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    padding: .8125rem 8.3125rem;
    border-radius: 27px;
    border: none;
    color: #fff;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    margin-top: 2.5rem;
    cursor: pointer;

    &:hover{
        background: linear-gradient(90deg, #FF6489 0%, #F9B24E 50%);
        transform: scale(1.03);
    }
`
export const BtnToGoToSignup = styled.button`
    font-family: 'Noto Sans', sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    width: 350px;
    height: 50px;
    border-radius: 27px;
    border: 1px solid #FE7E02;
    color: #FE7E02;
    background-color: #fff;
    cursor: pointer;

     &:hover{
        background: linear-gradient(90deg, #FF6489 0%, #F9B24E 50%);
        border: none;
        color: #fff;
        transform: scale(1.03);
    }
`