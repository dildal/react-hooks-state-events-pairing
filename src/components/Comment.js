import React from 'react'

function Comment({user, comment}) {
  return (
    <li>
        <h4>{user}</h4>
        <p>{comment}</p>
    </li>
  )
}

export default Comment;