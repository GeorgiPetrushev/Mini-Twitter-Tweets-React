import React , {useState} from "react";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [textInput , setTextInput] = useState('');
  const [tweets , setTweets] = useState([
    {message : 'Hallo React',id : uuidv4() ,us : 'George'},
    {message : 'Beautiful day :)',id : uuidv4() ,us : 'Maria'},
    {message : 'Just got my new car!',id : uuidv4() ,us : 'Bill'},
  ]);
  const [name , setName] = useState('');
  
  return (
    <div>
        <h1>Twitter</h1>

        <CreateTweet 
            textInput = {textInput} 
            setTextInput = {setTextInput}
            tweets = {tweets}
            setTweets = {setTweets}
            name = {name}
            setName = {setName}
        />
        <TweetList name={name} tweets={tweets} setTweets = {setTweets}/>
    </div>
  );
}

export default App;
