import React, { Component } from 'react'
import UserPost from '../components/UserPost'
import { useSelector } from 'react-redux'

function UserPostContainer() {

    const props = useSelector(state => state)

    return (
        <div className="border">
            {props.user.posts.map(post => {
                return <UserPost post={post} key={post.id} />
            })}
            <UserPost />
            <UserPost />
            <UserPost />
            <UserPost />
            <UserPost />
            <UserPost />
            <UserPost />
        </div>
    )

}


export default UserPostContainer