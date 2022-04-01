import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPosts } from "../../store/post/actions";
import { postsSelector } from "../../store/post/postSlice";
import { StyledNoPosts, StyledWrapper } from "./StyledPosts";
import Post from "../post/Post";
import ScrollToTop from "../scrollToTop/ScrollToTop";

function Posts() {
  const dispatch = useDispatch();
  const { posts } = useSelector(postsSelector);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  return (
    <StyledWrapper>
      {posts.length ? (
        posts.map((p) => <Post key={p.id} post={p} />)
      ) : (
        <StyledNoPosts>No posts</StyledNoPosts>
      )}
      {showTopBtn && <ScrollToTop />}
    </StyledWrapper>
  );
}

export default Posts;
