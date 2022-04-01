import { PostType } from "../../store/post/types";
import {
  StyledWrapper,
  StyledHeaderSection,
  StyledAvatar,
  StyledAuthorWrapper,
  StyledName,
  StyledDate,
  StyledText,
  StyledContentWrapper,
  StyledContentText,
  StyledNoCommentText,
  StyledCommentsWrapper,
} from "./StyledPost";
import PostComment from "../postComment/PostComment";
import CreateComment from "../createComment/CreateComment";

interface Props {
  post: PostType;
}

function Post({ post }: Props) {
  const handleDateAndTime = () => {
    const time = new Date(Date.parse(post.createdAt)).toLocaleTimeString();
    const date = new Date(Date.parse(post.createdAt)).toLocaleDateString();
    return `${time}  ${date}`;
  };

  const renderHeaderSection = () => (
    <StyledHeaderSection>
      <StyledAvatar>{post.author.charAt(0).toUpperCase()}</StyledAvatar>
      <StyledAuthorWrapper>
        <StyledName>
          <StyledText>Post creator:</StyledText> {post.author}
        </StyledName>
        <StyledDate>
          <StyledText>Uploaded:</StyledText> {handleDateAndTime()}
        </StyledDate>
      </StyledAuthorWrapper>
    </StyledHeaderSection>
  );

  const renderContentSection = () => (
    <StyledContentWrapper>
      <StyledContentText>
        <StyledText>Content: </StyledText>
        {post.content}
      </StyledContentText>
    </StyledContentWrapper>
  );

  const renderCommentsSection = () => (
    <StyledCommentsWrapper>
      {post.comments.length ? (
        post.comments.map((c) => <PostComment key={c.id} comment={c} />)
      ) : (
        <StyledNoCommentText>No comments</StyledNoCommentText>
      )}
    </StyledCommentsWrapper>
  );

  return (
    <StyledWrapper noComments={post.comments.length ? false : true}>
      {renderHeaderSection()}
      {renderContentSection()}
      {renderCommentsSection()}
      <CreateComment postId={post.id} />
    </StyledWrapper>
  );
}

export default Post;
