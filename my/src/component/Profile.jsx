import React from 'react'
import map from "../assest/map.jpeg"

const Profile = ({account}) => {
  return (
    <div className='profile'>
      <div className="left">
       <div>
       <img src={account?.profilepicture} alt="" />
        <p>{account?.name}</p>
       </div>
        <div className='bottom_border'>
          <p>Username: {account?.username}</p>
          <p>e-mail: {account?.email}</p>
          <p>Phone: {account?.phone}</p>
          <p>Website: {account?.website}</p>
        </div>
      <div >
        <p>Company</p>
        <p>Name: {account?.company?.name}</p>
        <p>catchphrese: {account?.company?.catchPhrase}</p>
        <p>bs: {account?.company?.bs}</p>
      </div>
      </div>
      <div className="right">
        <div>
        <p>Address :</p>
        <p>Street : {account?.address?.street}</p>
        <p>Suite :{account?.address?.suite}</p>
        <p>City : {account?.address?.city}</p>
        <p>Zipcode : {account?.address?.zipcode}</p>
        </div>
        <img src={map} alt="" />
      </div>
    </div>
  )
}

export default Profile
