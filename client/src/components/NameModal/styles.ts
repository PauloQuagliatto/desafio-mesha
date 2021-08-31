import styled from "styled-components"

const ModalDiv = styled.div`
  margin-top: 78px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ModalH1 = styled.h1`
  font-family: "Lato", sans-serif;
  font-size: 24px;
  color: #29292e;
`

const ModalInput = styled.input`
  font-family: "Lato", sans-serif;
  height: 32px;
  padding: 0.5rem;
  font-size: 24px;
  background-color: #f5f5f5;
     
  border: 1px solid #5f5f5f;
  border-radius: 0.25rem;
`

const ButtonDiv = styled.div`
  width: 30%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
`
const RegisterButton = styled.button`
  height: 50px;
  border-radius: 8px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  font-size: 32px;
  background: #90F655;
  color: #fff;
  padding: 0 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`

export { ModalDiv, ModalH1, ModalInput, ButtonDiv, RegisterButton }
