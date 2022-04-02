import { Comment, Post } from "../models/models.js";

export const createComment = async (req, res) => {
  !req.body && res.status(400).send("Empty body");
  try {
    const comment = req.body;
    const postFound = await Post.findOne({ where: { id: comment.postId } });
    !postFound && res.status(400).send("Post dont exists");
    const createdComment = await Comment.create(comment);
    const post = await Post.findOne({
      where: { id: createdComment.postId },
      attributes: ["id", "author", "content", "createdAt"],
      include: [
        {
          model: Comment,
          attributes: ["id", "author", "content", "createdAt"],
        },
      ],
      order: [[Comment, "createdAt", "desc"]],
    });
    res.status(200).send(post);
  } catch (error) {
    res.status(400);
  }
};
