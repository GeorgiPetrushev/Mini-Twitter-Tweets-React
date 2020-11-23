import React ,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const CreateTweet = ({textInput,setTextInput,tweets,setTweets,name,setName}) =>{

    const userInput = (e) =>{
        setTextInput(e.target.value);
    };

    const userName = (em) =>{
        setName(em.target.value);
        
    }

    const submitTweet = (e) =>{
        e.preventDefault();
        if(name === null){
            console.log('work');
        }
        else{
            console.log(name);
        }
        setTweets([...tweets,{message : textInput,id : uuidv4() ,us : name}]);
        setTextInput('');
        setName('');
    };

    return(
        <div>
           <form onSubmit = {submitTweet}>
               <label>User name:</label><br />
               <input  value = {name} onChange = {userName} cols = '35' rows='1'></input><br />
               <label>Tweet:</label><br />
               <textarea value = {textInput} onChange= {userInput} cols = '35' rows='5'></textarea><br />
               <button className = "tweet-button">Send Tweet</button>
           </form>
        </div>
    );
};

export default CreateTweet;