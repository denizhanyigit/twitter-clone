import React from 'react';
import { CommentIcon, RetweetIcon,FavoriteIcon,ShareIcon  } from '../Icons/icon';

const FeedItem = ({ avatar, content, displayName, image, timestamp, username }) => {
  return (
    <article className="flex space-x-3 border-b border-gray-extraLight px-4 py-3 cursor-pointer">
      <img src={avatar} alt="Profile" class="w-11 h-11 rounded-full" />
      <div className="flex-1">
        <div className="flex items-center text-sm">
          <h4 className="font-bold" >{displayName}</h4>
          <span className="text-gray-dark ml-2">{username}</span>
          <div className="mx-2 bg-gray-dark h-1 w-1 border rounded-full" />
          <span className="text-gray-dark ml-2">
            {timestamp?.toDate().toLocaleTimeString('tr-TR')}
          </span>
        </div>
        <p className="mt-2 text-gray-900 text-sm">{content}</p>
        {image && <img src={image} className="my-2 rounded-xl max-h-96" /> }
        <ul className="-ml-1  mt-3 flex justify-between max-w-md">
          <li className="flex items-center space-x-3 text-gray-dark text-sm group">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light">
              <CommentIcon className="w-5 h-5 group-hover:text-primary-base"/>
            </div>
            <span className="group-hover:text-primary-base">7</span>
          </li>

          <li className="flex items-center space-x-3 text-gray-dark text-sm group">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-green-200">
              <RetweetIcon className="w-5 h-5 group-hover:text-green-400"/>
            </div>
            <span className="group-hover:text-primary-base">7</span>
          </li>

          <li className="flex items-center space-x-3 text-gray-dark text-sm group">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-pink-200">
              <FavoriteIcon className="w-5 h-5 group-hover:text-pink-400"/>
            </div>
            <span className="group-hover:text-primary-base">7</span>
          </li>

          <li className="flex items-center space-x-3 text-gray-dark text-sm group">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light">
              <ShareIcon className="w-5 h-5 group-hover:text-primary-base"/>
            </div>
          </li>

        </ul>
      </div>
    </article>
  )
}

export default FeedItem
