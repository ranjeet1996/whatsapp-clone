import React from 'react'
import "./UserProfile.css"

export function UserProfile({name,photoURL}) {
  return (
    <div className='user-profile'>
        {/* img of user */}
        <div className="user-image">
            <img src={photoURL} alt="" />
        </div>
        <div className="user-info">
            <p className='user-name'>{name}</p>
        </div>
        {/* name of user */}
    </div>
  )
}


