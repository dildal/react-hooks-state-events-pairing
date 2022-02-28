import React, {useState} from 'react';
import video from "../data/video.js";
import CommentList from './CommentsList.js';
import VideoDetails from './VideoDetails.js';

function App() {
  console.log("Here's your data:", video);
  const [votes, setVotes] = useState([video.upvotes, video.downvotes])

  function handleVote(vote){
    console.log('hello')
    console.log(votes)
    if(vote){
      setVotes([votes[0] + 1, votes[1]]);
    } else{
      setVotes([votes[0], votes[1] + 1]);
    }
  }
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <VideoDetails
        title={video.title}
        views={video.views}
        upvotes={votes[0]}
        downvotes={votes[1]}
        createdAt={video.createdAt}
        handleVote={handleVote}
      />
      <CommentList comments={video.comments}/>
    </div>
  );
}

export default App;
