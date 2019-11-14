import React from 'react'

const UserPost = props => {
    return(
        <span className="b rounded">
            <video width="100%" height="100%" controls>
                    <source src={props.post.file_url} type="video/mp4"/>
            </video>
        </span>
    )
}

export default UserPost