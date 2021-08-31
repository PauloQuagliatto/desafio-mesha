import styled from "styled-components"

const Container = styled.div`
  margin: 0rem 5rem 5rem 5rem;
  table { 
    width: 100%;
    border-spacing: 0 0.6rem;

    th {
      font-family: "Lato", sans-serif;
      color: #1f1f1f;
      font-weight: 600;
      padding: 2rem 3rem;
      text-align: left;
      line-height: 2rem;

      &:last-child {
        text-align: right;
      }
    }

    tr {
      cursor: pointer;

      transition: filter 0.2s ease;
        &:hover{
          filter: brightness(0.9);
        }
    }
    td {
      font-family: "Lato", sans-serif;
      padding: 1rem 2rem;
      width: 15px;
      border: 0;
      background: #F5F5F3;
      color: #3f3f3f;
      border-radius: 0.1rem;
                
      &:first-child{
        color: #3f3f3f;
      }

      &:last-child {
        text-align: right;
      }

      &.validated{
        color: #23FF00;
      }

      &.not-validated{
        color: #F23455;
      }
    }
  }
`
const WarningDiv = styled.div`

  h1 {
    font-family: "Lato", sans-serif;
    color: #fff;
    background-color: #FF3908;
    padding: 0.2rem;
    font-size: 50px;
    border-radius: 0.25rem;

    text-align: center;
  }
`

export { Container, WarningDiv }