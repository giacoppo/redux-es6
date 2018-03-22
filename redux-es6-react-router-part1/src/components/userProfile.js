import React from 'react';
import Button from './button';
import userProfile from '../reducers/userProfile';

const UserProfile = (props) => {
    const { UserProfile } = props;
    return (
        userProfile ?
        <div className='container'>
            <img src={`${userProfile.picture.large}`} />
            <span>{`${userProfile.name.title}, ${userProfile.name.first} ${userProfile.name.last}`}</span>
            <span>{userProfile.email}</span>
        </div>
        : <h1>Looks like you haven't selected a user</h1>
    )
}

export default UserProfile;