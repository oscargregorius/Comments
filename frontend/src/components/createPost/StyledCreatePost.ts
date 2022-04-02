import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// MUI thrown a warning at camelCased values
// and boolean attributes, therefore this solution
interface Props {
  dontshowbutton: number | undefined;
}

export const StyledWrapper = styled.section`
  display: grid;
`;

export const StyledForm = styled.form<Props>`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 3rem;
  padding: 1rem;
  align-self: center;
  display: grid;
  grid-template-columns: ${(props) =>
    props.dontshowbutton ? "10vw auto" : "10vw auto 10vw"};
  grid-gap: 0.5rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledNameInput = styled(TextField)`
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #f4bb44;
  }
  & .MuiFormLabel-root {
    color: gray !important;
  }
`;

export const StyledContentInput = styled(TextField)`
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #f4bb44;
  }
  & .MuiFormLabel-root {
    color: gray !important;
  }
`;

export const StyledButton = styled(Button)<Props>`
  &&& {
    background: #f4bb44;
    display: ${(props) => (props.dontshowbutton ? "none" : "block")};
  }
`;
