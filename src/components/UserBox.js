import React from 'react'

const UserBox = () => {
  return (
    <div className="flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-200">
      <img
        className="w-11 h-11 rounded-full"
        src="https://scontent.fist4-1.fna.fbcdn.net/v/t1.6435-9/93109369_2728052840639679_8381601594080231424_n.jpg?_nc_cat=110&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=nQ4LcGPO6V0AX_-AMJ2&_nc_ht=scontent.fist4-1.fna&oh=943cadf880ed99cc89fbc7ba51c4a238&oe=61371461" alt="Profile"/>
      <div className="flex flex-col">
        <span className="font-bold text-md text-black">Denizhan Yiğit</span>
        <span className="text-sm text-gray-dark">@denizhanyigit</span>
      </div>
      <div className="flex space-x-1">
        <div className="w-1 h-1 bg-gray-900 rounded-full"/>
        <div className="w-1 h-1 bg-gray-900 rounded-full"/>
        <div className="w-1 h-1 bg-gray-900 rounded-full"/>        
      </div>
    </div>
  )
}

export default UserBox
