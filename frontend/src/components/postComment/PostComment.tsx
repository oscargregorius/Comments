import { CommentType } from "../../store/post/types";
import {
  StyledAvatar,
  StyledContentWrapper,
  StyledText,
  StyledWrapper,
  StyledNameAndDateWrapper,
  StyledName,
  StyledDate,
  StyledTextSpan,
} from "./StyledPostComment";

interface Props {
  comment: CommentType;
}

function PostComment({ comment }: Props) {
  const handleDateAndTime = () => {
    const time = new Date(Date.parse(comment.createdAt)).toLocaleTimeString();
    const date = new Date(Date.parse(comment.createdAt)).toLocaleDateString();
    return `${time}  ${date}`;
  };

  return (
    <StyledWrapper>
      <StyledAvatar>{comment.author.charAt(0).toUpperCase()}</StyledAvatar>
      <StyledContentWrapper>
        <StyledNameAndDateWrapper>
          <StyledName>
            <StyledTextSpan>Author: </StyledTextSpan>
            {comment.author}
          </StyledName>
          <StyledDate>
            <StyledTextSpan>Date: </StyledTextSpan>
            {handleDateAndTime()}
          </StyledDate>
        </StyledNameAndDateWrapper>
        <StyledText>{comment.content}</StyledText>
      </StyledContentWrapper>
    </StyledWrapper>
  );
}

export default PostComment;
