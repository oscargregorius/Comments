export interface PostType {
  id: number;
  author: string;
  content: string;
  createdAt: string;
  comments: [] | CommentType[];
}

export interface PostToAddType {
  author: string;
  content: string;
}

export interface CommentType {
  id: number;
  author: string;
  content: string;
  createdAt: string;
}

export interface CommentToAddType {
  author: string;
  content: string;
  postId: number;
}
