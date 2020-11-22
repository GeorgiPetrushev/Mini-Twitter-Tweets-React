import React , {useState} from "react";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {

  const [textInput , setTextInput] = useState('');
  const [tweets , setTweets] = useState([]);
  const name = "George"
  const message = `This is soo cool !`;

  return (
    <div>
        <h1>Twitter</h1>
        <CreateTweet 
            textInput = {textInput} 
            setTextInput = {setTextInput}
            tweets = {tweets}
            setTweets = {setTweets}
        />
        <TweetList name={name} tweets={tweets} setTweets = {setTweets}/>
    </div>
  );
}

export default App;
