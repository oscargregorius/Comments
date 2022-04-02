import styled from "styled-components";
import Fab from "@mui/material/Fab";

export const StyledFab = styled(Fab)`
  &&& {
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    background: #f4bb44;
    color: white;
    @media (max-width: 768px) {
      right: 0.5rem;
      bottom: 0.5rem;
    }
  }
`;
