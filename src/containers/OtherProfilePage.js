import React, { useEffect } from 'react';
import ProfileMenuBar from '../components/ProfileMenuBar'
import OtherUserPostContainer from '../containers/OtherUserPostContainer'
import { useDispatch, useSelector } from 'react-redux'

function OtherProfilePage() {
    const dispatch = useDispatch()
    const props = useSelector(state => state)
    let otherUser = props.posts[props.postIndex].user

    //useEffect to get fetch otherUser
    function myEffect() {
        //fetch request to get current user in session
        fetch(`http://localhost:3000/users/${otherUser.id}`, { credentials: 'include' })
            .then(resp => resp.json())
            .then(otherUser => {
                console.log("otherUser: ", otherUser)
                dispatch({ type: 'SET_OTHER_USER', otherUser: otherUser })
            })
    }

    useEffect(myEffect, [])

    return (
        <div className="">
            <div class="media border p-3 lavender rounded">
                <img src={otherUser.file_url} alt="user pic" class="mr-3 mt-3 rounded-circle" width="60px" />
                <div class="media-body">
                    <h4>{otherUser.username}</h4>
                    <p>Bio: {otherUser.description}</p>
                </div>
            </div>

            <ProfileMenuBar /><br />
            <OtherUserPostContainer />
        </div>
    );
}

export default OtherProfilePage;