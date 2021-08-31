import styled from "styled-components"

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input {
      width: 80%;
      padding: 0.5rem;
      height: 32px;
      font-size: 24px;
      background-color: #f5f5f5;
      border: 1px solid #5f5f5f;
      border-radius: 0.25rem;

      &:not(:first-child){
        margin-top: 1.5rem;
      }
    }
`
const CheckBoxContainer = styled.div`
  margin: 5rem 3rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  div {
    width: 150px;
    height: 80px;
    display: flex;
    flex-direction: column; 
    justify-content: space-between;
    align-items: center;

    label {
      font-family: 'Lato', sans-serif;
      font-size: 16px;
      font-weight: 400;
    }

    input[type="checkbox"] {
      appearance: none;
      -webkit-appearance: none;
      height: 32px;
      width: 32px;
      border: 1px solid #909090;
      border-radius: 50%;

      cursor: pointer;

      &:checked {
        background-color: #55FF88;
      }
    }
  }
`

export { Form, CheckBoxContainer }