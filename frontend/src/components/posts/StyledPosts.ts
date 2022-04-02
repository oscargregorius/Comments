import styled from "styled-components";

export const StyledWrapper = styled.main`
  margin: 1rem auto;
  width: 70vw;
  display: grid;
  grid-gap: 4rem;
  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export const StyledNoPosts = styled.p`
  margin: 0;
  justify-self: center;
  font-size: 1.2rem;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  color: black;
`;
