import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  StyledCommentSection,
  StyledNameInput,
  StyledContentInput,
  StyledButton,
} from "./StyledCreateComment";
import { createComment } from "../../store/post/actions";
import { setIsOpen, setErrorMsg } from "../../store/errorHandler/errorSlice";

interface Props {
  postId: number;
}

function CreateComment({ postId }: Props) {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleAddComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (author.trim().length === 0 || content.trim().length === 0) {
      dispatch(setErrorMsg("A empty name/content is not allowed"));
      dispatch(setIsOpen(true));
      return;
    }
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
    <StyledCommentSection
      dontshowbutton={!author ? 1 : undefined || !content ? 1 : undefined}
      onSubmit={(e) => handleAddComment(e)}
    >
      <StyledNameInput
        required
        variant="outlined"
        label="Name"
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <StyledContentInput
        required
        variant="outlined"
        label="Type your comment here.."
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <StyledButton
        dontshowbutton={!author ? 1 : undefined || !content ? 1 : undefined}
        type="submit"
        variant="contained"
      >
        Send
      </StyledButton>
    </StyledCommentSection>
  );
}

export default CreateComment;
