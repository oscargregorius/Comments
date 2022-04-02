import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// MUI thrown a warning at camelCased values
// and boolean attributes, therefore this solution
interface Props {
  dontshowbutton: number | undefined;
}

export const StyledCommentSection = styled.form<Props>`
  background: #fcfcfc;
  padding: 1rem;
  margin-bottom: 1rem;
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
