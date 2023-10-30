import styled from "styled-components";

export const FormComment = styled.form`
  width: 85%;
`;
export const ContainerMessageComment = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  hr {
    border: 1px solid #f9b24e;
    margin: 0.2rem 0 0.8rem;
  }
`;
export const TextareaComment = styled.textarea`
  border: none;
  border-radius: 12px;
  height: 18.5vh;
  overflow: hidden;
  background-color: #ededed;
  padding: 1rem 0 0 1rem;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 400;
  font-size: 1.125rem;
`;
export const BtnComment = styled.button`
  border: none;
  border-radius: 12px;
  height: 47px;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  cursor: pointer;

  &:hover {
    background: linear-gradient(90deg, #ff6489 0%, #f9b24e 50%);
    transform: scale(1.03);
  }
`;
