import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const StyledCommentSection = styled.form`
  background: #fcfcfc;
  padding: 1rem;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 10rem 1fr 10rem;
  grid-gap: 0.5rem;
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

export const StyledButton = styled(Button)`
  &&& {
    background: #f4bb44;
  }
`;
