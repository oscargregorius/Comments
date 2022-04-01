import { StyledFab } from "./StyledScrollToTop";

function ScrollToTop() {
  const handleGoToTops = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <StyledFab onClick={handleGoToTops} aria-label="GoToTop">
      Top
    </StyledFab>
  );
}

export default ScrollToTop;
