import styled from "styled-components";
import Avatar from "@mui/material/Avatar";

export const StyledWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 7% 93%;
  grid-gap: 1rem;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;

export const StyledContentWrapper = styled.div`
  background: #f4bb44;
  border-radius: 1rem;
  word-wrap: break-word;
  line-height: 1.5;
`;

export const StyledAvatar = styled(Avatar)`
  &&& {
    background: #f4bb44;
    color: black;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const StyledText = styled.p`
  margin: 0;
  padding: 1rem;
  color: black;
`;

export const StyledNameAndDateWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;

export const StyledTextSpan = styled.span`
  font-weight: bold;
  color: white;
`;

export const StyledName = styled.p`
  margin: 0 1rem;
  color: white;
`;

export const StyledDate = styled.p`
  margin: 0;
  color: white;
  justify-self: end;
  margin: 0 1rem;
  @media (max-width: 768px) {
    justify-self: start;
  }
`;
