import React ,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const CreateTweet = ({textInput,setTextInput,tweets,setTweets}) =>{

    const userInput = (e) =>{
        setTextInput(e.target.value);
    };

    const submitTweet = (e) =>{
        e.preventDefault();
        setTweets([...tweets,{message : textInput,id : uuidv4()}]);
        setTextInput('');
    };

    return(
        <div>
           <form onSubmit = {submitTweet}>
               <textarea value = {textInput} onChange= {userInput} cols = '35' rows='5'></textarea>
               <button>Create</button>
               

           </form>
        </div>
    );
};

export default CreateTweet;