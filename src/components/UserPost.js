import React from 'react'

const UserPost = props => {
    return(
        <span className="b">
            UserPost<br/>
            <video className="video" controls>
                    {/* <source src={props.post.file_url} type="video/mp4"/> */}
            </video>
        </span>
    )
}

export default UserPost