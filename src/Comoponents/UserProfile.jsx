import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./UserProfile.css"

export function UserProfile({name,photoURL,email}) {
  const navigate=useNavigate();
  const goToUser=(emailId)=>{
    if(emailId){
      navigate(`/${emailId}`);
    }
  }
  return (
    <div className='user-profile' onClick={()=>goToUser(email)}>
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


