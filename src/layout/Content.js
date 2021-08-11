import React, { useEffect, useState } from 'react';
import Divider from '../components/Divider';
import TweetBox from '../components/TweetBox';
import FeedList from '../components/FeedList';
import db from '../firebase';
import { PopulerIcon } from '../Icons/icon';

const Content = () => {
    const [tweets,setTweets] = useState([]);
    useEffect(() => {
        db.collection('feed')
        .orderBy('timestamp','desc')
        .onSnapshot(snapshot => setTweets(snapshot.docs.map(doc => doc.data())))
    },[]);
    console.log(tweets);
    return (
        <main className="flex-1 flex flex-col border-r border-l border-gray-extraLight">
            <header className="sticky top-0 z-10 flex justify-between items-center p-4 border-b border-gray-extraLight bg-white">
                <span className="font-bold text-xl text-gray-900">Home</span>
                <span ><PopulerIcon className="w-6 h-7 text-primary-base" /></span>
            </header>
            <div className="flex px-4 py-3 space-x-4">
                <img
                    className="w-11 h-11 rounded-full"
                    src="https://scontent.fist4-1.fna.fbcdn.net/v/t1.6435-9/93109369_2728052840639679_8381601594080231424_n.jpg?_nc_cat=110&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=nQ4LcGPO6V0AX_-AMJ2&_nc_ht=scontent.fist4-1.fna&oh=943cadf880ed99cc89fbc7ba51c4a238&oe=61371461" alt="Profile" />
                <TweetBox/>
            </div>
            <Divider/>

            <FeedList tweets = {tweets}/>

        </main>
    )
}

export default Content;


