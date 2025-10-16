import type { Comment } from '../../types/comments';
import './PopularComments.css'

type PopularCommentsProps = {
  comments: Comment;
}

export default function PopularComment({comments} : PopularCommentsProps) {
  return (
    <article className=''>
      <h3>{comments.name}</h3>
      <p>{comments.body}</p>
      <p><strong>Email:</strong> {comments.email}</p>
    </article>
  )
}
