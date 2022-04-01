import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

interface NoCommentsProps {
  noComments: boolean;
}

export const StyledWrapper = styled.div<NoCommentsProps>`
  background: #fcfcfc;
  width: 90%;
  min-height: 30vh;
  justify-self: start;
  display: grid;
  grid-template-rows: ${(props) =>
    props.noComments ? "auto auto 10vh auto" : `auto auto 35vh auto`};
  box-shadow: 10px 5px 5px #ececec;
`;

export const StyledHeaderSection = styled.div`
  background: #fcfcfc;
  padding: 0.5rem;
  display: flex;
  gap: 2rem;
`;

export const StyledAvatar = styled(Avatar)`
  &&& {
    background: #f4bb44;
    color: black;
  }
`;

export const StyledText = styled.span`
  margin: 0;
  color: #f4bb44;
  font-weight: bold;
`;

export const StyledAuthorWrapper = styled.div`
  display: grid;
`;

export const StyledName = styled.p`
  color: black;
  margin: 0;
`;

export const StyledDate = styled.p`
  color: black;
  margin: 0;
`;

export const StyledContentWrapper = styled.div`
  margin-top: 1rem;
  padding: 1rem;
`;

export const StyledContentText = styled.p`
  margin: 0;
  color: black;
`;

export const StyledCommentsWrapper = styled.div`
  overflow: scroll;
`;

export const StyledNoCommentText = styled.p`
  color: white;
  font-size: 1rem;
  text-align: center;
`;
