import React from 'react'

function VideoDetails({title, views, createdAt, upvotes, downvotes, handleVote}) {
  return (
    <div>
        <h2>{title}</h2>
        <p>{views} | Uploaded {createdAt}</p>
        <button onClick={() => handleVote(true)}>
            {upvotes} 👍
        </button>
        <button onClick={() => handleVote(false)}>
            {downvotes} 👎
        </button>
    </div>
  )
}

export default VideoDetails;