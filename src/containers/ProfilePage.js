import React from 'react';
import UserHeader from '../components/UserHeader'
import ProfileMenuBar from '../components/ProfileMenuBar'
import UserPostContainer from '../containers/UserPostContainer'
import { useDispatch } from 'react-redux'

function ProfilePage() {
    const dispatch = useDispatch()

    return (
        <div className="profile">
            Profile Page
        <UserHeader />
            <button onClick={() => dispatch({ type: 'SWITCH_PAGE', page: 'edit-profile' })} >Edit profile</button><br /><br />
            <ProfileMenuBar /><br />
            <UserPostContainer />
        </div>
    );
}

export default ProfilePage;