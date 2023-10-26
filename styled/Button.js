import styled from "styled-components";

export const Button = styled.button`
font-size: 1rem;
  min-width: 13.75rem;
  border: none;
  padding: .625rem 1.125rem;
  background: #000;
  border-radius: .3125rem;
  color: white;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;
  cursor: pointer;
  &:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;
export const OutlineButton = styled(Button)`
  border: 1px solid black;
  color: black;
  background-color: white;
    &:hover{
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;