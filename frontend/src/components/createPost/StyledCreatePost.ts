import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const StyledWrapper = styled.section`
  display: grid;
`;

export const StyledForm = styled.form`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 3rem;
  padding: 1rem;
  align-self: center;
  display: grid;
  grid-template-columns: 8rem auto 7rem;
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
