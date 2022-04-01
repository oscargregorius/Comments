import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  StyledCommentSection,
  StyledNameInput,
  StyledContentInput,
  StyledButton,
} from "./StyledCreateComment";
import { createComment } from "../../store/post/actions";

interface Props {
  postId: number;
}

function CreateComment({ postId }: Props) {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleAddComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const comment = {
      author,
      content,
      postId,
    };
    dispatch(createComment(comment));
    setAuthor("");
    setContent("");
  };

  return (
    <StyledCommentSection onSubmit={(e) => handleAddComment(e)}>
      <StyledNameInput
        required
        variant="outlined"
        label="name"
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <StyledContentInput
        required
        variant="outlined"
        label="comment"
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <StyledButton
        type="submit"
        variant="contained"
        disabled={!author || !content}
      >
        Send
      </StyledButton>
    </StyledCommentSection>
  );
}

export default CreateComment;
