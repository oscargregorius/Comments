import express from "express";
import { getPosts, createPost } from "../controllers/PostController.js";
import { createComment } from "../controllers/CommentController.js";

const router = express.Router();

router.get("/rest/posts", getPosts);
router.post("/rest/post", createPost);
router.post("/rest/comment", createComment);

export default router;
