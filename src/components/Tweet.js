import React from 'react';

const Tweet = ({name,tweet,tweets,setTweets}) =>{
    const deleteTweet = () => {setTweets(tweets.filter(item => item.id !== tweet.id));};

    return(
        <div className="Tweet-list">
            <h2>User: {tweet.us}</h2>
            <h3>tweet: {tweet.message}</h3>
            <button className = "myButton" onClick = {deleteTweet}>Delete</button>
            <button className = "myButton">Like</button>
        </div>
    );
};

export default Tweet;
