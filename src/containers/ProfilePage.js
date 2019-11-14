import React from 'react';
import ProfileMenuBar from '../components/ProfileMenuBar'
import UserPostContainer from '../containers/UserPostContainer'
import { useDispatch, useSelector } from 'react-redux'

function ProfilePage() {
    const dispatch = useDispatch()
    const props = useSelector(state => state)

    return (
        <div className="">
            <div class="media border p-3 lavender rounded">
                <img src={props.user.file_url} alt="user pic" class="mr-3 mt-3 rounded-circle" width="60px" />
                <div class="media-body">
                    <h4>{props.user.username}</h4>
                    <p>Bio: {props.user.description}</p>
                </div>
                <button class="btn btn-outline-primary btn-sm" onClick={() => dispatch({ type: 'SWITCH_PAGE', page: 'edit-profile' })} >Edit profile</button>
            </div>

            <ProfileMenuBar /><br />
            <UserPostContainer />
        </div>
    );
}

export default ProfilePage;