import React from 'react'

const ProfileMenuBar = props => {
    return (
        <ul>
            <li><a className="active" href="#home">Posts</a></li>
            <li><a href="#news">Saved</a></li>
            <li><a href="#contact">Tagged</a></li>
        </ul>

    )
}

export default ProfileMenuBar