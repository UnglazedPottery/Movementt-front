import React, { Component } from 'react'
import UserPost from '../components/UserPost'

class UserPostContainer extends Component {

    render() {
        return (
            <div className="border">
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
}


export default UserPostContainer