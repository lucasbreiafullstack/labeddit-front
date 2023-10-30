import styled from "styled-components";

export const ContainerLogo = styled.header`
  display: flex;
  align-items: center;
  background-color: #ededed;
  width: 100%;
  height: 50px;
`;
export const ContainerLogoComments = styled.div`
  display: flex;
  align-items: center;
  background-color: #ededed;
  width: 100%;
  height: 50px;
`;
export const ImgReturn = styled.img`
  position: absolute;
  left: 8%;
  cursor: pointer;

  &:hover{
    transform: scale(1.1);
  }
`
export const ImgLogo = styled.img`
  width: 28.02px;
  height: 28.64px;
  position: absolute;
  left: 49%;
`;
export const SubTitle = styled.p`
  color: #4088cb;
  font-family: "Noto Sans", sans-serif;
  font-weight: 600;
  font-size: 1.125rem;
  position: absolute;
  right: 5%;
  cursor: pointer;

  &:hover{
    transform: scale(1.08);
  }
`;