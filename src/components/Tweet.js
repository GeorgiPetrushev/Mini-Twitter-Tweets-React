import React from 'react';

const Tweet = ({name,tweet,tweets,setTweets}) =>{
    const deleteTweet = () => {setTweets(tweets.filter(item => item.id !== tweet.id));};

    return(
        <div>
            <h2>{name}</h2>
            <h3>{tweet.message}</h3>
            <button onClick = {deleteTweet}>Delete</button>
            <button>Like</button>
        </div>
    );
};

export default Tweet;
