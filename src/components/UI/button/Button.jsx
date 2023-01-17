import styled from "styled-components"
const StyledButton = styled.button`
 font: inherit;
    padding: 0.5rem 1.5rem;
    border: 1px solid  #f67722;
    background:  #f67722;
    color: white;
    border-radius: 6px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);
    cursor: pointer;
    margin: 0 0.5rem;
`
const Button = (props) => {
  return (
    <StyledButton onClick={props.onClick}>{props.title}</StyledButton>
  )
}

export default Button