import styled from "styled-components";

export const Wrapper = styled.article`
    background-color: #FBFBFB;
    height: auto;
    width: 50em;
    border: 1px solid #E0E0E0;
    border-radius: 1em;
    margin-bottom: 2em;
    padding: 1em;
`
export const Creator = styled.p`
    color: #6F6F6F;
    text-align: left;
    font-family: 'IBM Plex Sans';
    font-size: 1.5em;
    font-weight: 400;
    line-height: 1.6em;
`
export const Content = styled.section`
    width: 100%;
    & p{
        color: #000;
        text-align: left;
        font-size: 2.5em;
        line-height: 2.6em;
        font-family: 'IBM Plex Sans';
        font-weight: 400;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`
export const ActionSection = styled.section`
    display: flex;
    flex-direction: row;
    gap: 2em;
`
export const Img = styled.img`
    height: 1.7em;
    scale: ${(props) => {
        if(props.$scale){
            return '1.3'
        }else{
            return '1'
        }
    }};
`
export const LikesDislikes = styled.div`
    color: #6F6F6F;
    text-align: center;
    font-family: 'IBM Plex Sans';
    font-size: 1.2em;
    font-style: normal;
    font-weight: 700;
    line-height: 1.2em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2em;
    width: 10em;
    height: 2.5em;
    border-radius: 2.5em;
    border: .12em solid #ECECEC;
`
export const Comments = styled.div`
    color: #6F6F6F;
    text-align: center;
    font-family: 'IBM Plex Sans';
    font-size: 1.2em;
    font-style: normal;
    font-weight: 400;
    line-height: 1.2em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1em;
    width: 6em;
    height: 2.5em;
    border-radius: 2.5em;
    border: .12em solid #ECECEC;
`