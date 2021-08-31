import styled from "styled-components"

const Container = styled.div`
    margin: 3rem 2rem 0rem 2rem;
    display: block;
    justify-content: center;
    align-items: center;
`
const TitleContainer = styled.div`
  margin: 5rem 0rem 0rem 5rem;
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 { 
    color: #050505;
    font-weight: 700;
    font-size: 40px;
  } 

  button {
    height: 60px;
    width: 60px;
    font-family: "Lato", sans-serif;
    font-size: 48px;

    color: #f5f5f5;

    border-radius: 0.15rem;
    background: #55FF88;
    border: none;

    cursor: pointer;

    transition: filter 0.2s ease;
    
    &:hover {
      filter: brightness(0.9);
    }
  }
`
export { Container, TitleContainer }