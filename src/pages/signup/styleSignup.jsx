import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
`;
export const Title = styled.h1`
  color: #373737;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 700;
  font-size: 2.0625rem;
  padding-left: 1rem;
`;
export const ContainerForm = styled.main`
  padding-left: 1rem;
  padding-right: 1.2rem;
`;
export const Form = styled.form`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  font-family: "Noto Sans", sans-serif;
  width: 360px;
  padding: 0 0.5rem;
`;
export const InputText = styled.input`
  height: 60px;
  padding-left: 17px;
  color: #323941;
  font-size: 1rem;
  font-weight: 400;
  border-radius: 4px;
  border: 1px solid #d5d8de;
`;
export const TextContract = styled.p`
  span {
    color: #4088cb;
    cursor: pointer;

    &:hover {
      text-decoration-line: underline;
    }
  }
`;
export const ContainerTermContract = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0 1rem 0;
  font-size: 0.875rem;
`;
export const InputCheck = styled.div`
  display: flex;
  gap: 0.8rem;
`;
export const BtnRegister = styled.button`
  border: none;
  border-radius: 27px;
  padding: 13px 133px;
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
