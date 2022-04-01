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

function CreatePost() {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleCreatePost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      <StyledForm onSubmit={(e) => handleCreatePost(e)}>
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
          label="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <StyledButton
          type="submit"
          disabled={!author || !content}
          variant="contained"
        >
          Post
        </StyledButton>
      </StyledForm>
    </StyledWrapper>
  );
}

export default CreatePost;
