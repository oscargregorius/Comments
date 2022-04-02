import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// MUI thrown a warning at camelCased values
// and boolean attributes, therefore this solution
interface NoCommentsProps {
  nocomments?: boolean;
  showallcomments: number | undefined;
}

export const StyledWrapper = styled.div<NoCommentsProps>`
  background: #fcfcfc;
  width: 90%;
  min-height: 30vh;
  justify-self: center;
  display: grid;
  grid-template-rows: ${(props) =>
    props.nocomments
      ? "auto auto auto 10vh"
      : `auto auto auto ${props.showallcomments ? "auto" : "30vh"}`};
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
  color: black;
  font-size: 1rem;
  text-align: center;
`;

export const StyledShowMoreOrLess = styled(
  KeyboardArrowDownIcon
)<NoCommentsProps>`
  &&& {
    margin: 0 auto;
    cursor: pointer;
    transform: ${(props) => (props.showallcomments ? "rotate(180deg)" : "")};
  }
`;
