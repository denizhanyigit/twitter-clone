import React, { useState } from 'react';
import { ImageIcon,GIFIcon,SurveyIcon,EmojiIcon,PlanIcon } from '../Icons/icon';
import db from '../firebase';
import firebase from 'firebase';

const TweetBox = () => {

 const [content,setContent] = useState('');

 const sendTweet = () => {
    if(content !== ''){
      db.collection('feed').add({
        displayName : 'Denizhan Yiğit',
        username : '@37liyik',
        content,
        timestamp : firebase.firestore.FieldValue.serverTimestamp(),
        avatar : "https://scontent.fist4-1.fna.fbcdn.net/v/t1.6435-9/93109369_2728052840639679_8381601594080231424_n.jpg?_nc_cat=110&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=nQ4LcGPO6V0AX_-AMJ2&_nc_ht=scontent.fist4-1.fna&oh=943cadf880ed99cc89fbc7ba51c4a238&oe=61371461"
      });
      setContent('');
    }
 }

  return (
    <div className="flex-1 flex flex-col mt-2 px-2">
      <textarea value={content} onChange={(e)=>setContent(e.target.value)} className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent" placeholder="What's happening?" />
      <div className="flex items-center justify-between">
        <div className="flex -ml-3">
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <ImageIcon className="w-6 h-6 text-primary-base"/>            
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <GIFIcon className="w-6 h-6 text-primary-base"/>            
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <SurveyIcon className="w-6 h-6 text-primary-base"/>            
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <EmojiIcon className="w-6 h-6 text-primary-base"/>           
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <PlanIcon className="w-6 h-6 text-primary-base"/>  
          </div>                                             
        </div>
        <button onClick={sendTweet} className="bg-primary-base text-white rounded-full px-4 py-2 font-medium">Tweet</button>
      </div>
    </div>
  )
}

export default TweetBox
