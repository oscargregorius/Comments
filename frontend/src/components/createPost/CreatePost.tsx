import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  StyledWrapper,
  StyledForm,
  StyledNameInput,
  StyledContentInput,
  StyledButton,
} from "./StyledCreatePost";
import { createPost } from "../../store/post/actions";
import { setIsOpen, setErrorMsg } from "../../store/errorHandler/errorSlice";

function CreatePost() {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleCreatePost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (author.trim().length === 0 || content.trim().length === 0) {
      dispatch(setErrorMsg("No blank fields allowed"));
      dispatch(setIsOpen(true));
      return;
    }
    const post = {
      author,
      content,
    };
    dispatch(createPost(post));
    setAuthor("");
    setContent("");
  };

  return (
    <StyledWrapper>
      <StyledForm
        dontshowbutton={!author ? 1 : undefined || !content ? 1 : undefined}
        onSubmit={(e) => handleCreatePost(e)}
      >
        <StyledNameInput
          variant="outlined"
          required
          type="text"
          label="Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <StyledContentInput
          variant="outlined"
          required
          type="text"
          label="Type your post content here.."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <StyledButton
          type="submit"
          disabled={!author || !content}
          variant="contained"
          dontshowbutton={!author ? 1 : undefined || !content ? 1 : undefined}
        >
          Post
        </StyledButton>
      </StyledForm>
    </StyledWrapper>
  );
}

export default CreatePost;
