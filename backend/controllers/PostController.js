import { Post, Comment } from "../models/models.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      attributes: ["id", "author", "content", "createdAt"],
      include: [
        {
          model: Comment,
          attributes: ["id", "author", "content", "createdAt"],
        },
      ],
      order: [
        ["createdAt", "desc"],
        [Comment, "createdAt", "desc"],
      ],
    });
    await res.status(200).send(posts);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const createPost = async (req, res) => {
  !req.body && res.status(400).send("Empty body");
  try {
    const createdPost = await Post.create(req.body);
    const post = await Post.findOne({
      where: { id: createdPost.id },
      attributes: ["id", "author", "content", "createdAt"],
      include: [
        {
          model: Comment,
          attributes: ["id", "author", "content", "createdAt"],
        },
      ],
    });
    res.status(200).send(post);
  } catch (error) {
    res.status(400).send(error);
  }
};
