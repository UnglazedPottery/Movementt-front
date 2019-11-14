import React, { Component } from 'react'
import UserPost from '../components/UserPost'
import { useSelector } from 'react-redux'

function UserPostContainer() {

    const props = useSelector(state => state)
    if(!props.otherUser) return null

    return (
        <div className="border lavender rounded">
            {props.otherUser.posts.map(post => {
                return <UserPost post={post} key={post.id} />
            })}
        </div>
    )

}


export default UserPostContainer