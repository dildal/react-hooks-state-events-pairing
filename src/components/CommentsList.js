import React, {useState} from 'react'
import Comment from './Comment';

function CommentsList({comments}) {
  const [showComments, setShowComments] = useState(true);

  const commentsToDisplay = comments.map(comment => {
  return <Comment 
    key={comment.id}
    user={comment.user}
    comment={comment.comment}
  />
})

  return (
    <div>
      <button onClick={() => setShowComments(!showComments)}>
          {showComments ? 'Hide Comments' : 'Show Comments'}
      </button>
      <hr/>
      <h2>{comments.length} Comments</h2>
      <ul>
        {showComments && commentsToDisplay}
      </ul>
    </div>
  )
}
 
export default CommentsList