import type { Comment } from "../../types/comments";
import "./PopularComments.css";

type PopularCommentsProps = {
  comments: Comment;
};

export default function PopularComment({ comments }: PopularCommentsProps) {
  return (
    <article className="todo-container">
      <h3 className="todo-title">{comments.name}</h3>
      <p className="todo-body">{comments.body}</p>
      <p className="todo-email">{comments.email}</p>
      {/* <p><strong>Email:</strong> {comments.email}</p> */}
    </article>
  );
}
