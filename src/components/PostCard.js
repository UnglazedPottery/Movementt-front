import React from 'react'
import '../App.css';

class PostCard extends React.Component {

    render() {
        let { post } = this.props;
        return (
            <div className="border m-4 p-1 rounded-lg lavender" key={post.id}>
                {console.log("post", post)}
                <img src={post.user.file_url} alt="user pic " height="42" width="42" className="rounded m-1"/><strong> {post.user.username}</strong><br/>
                <video className="video " controls>
                    <source src={post.file_url} type="video/mp4"/>
                </video>

                <p>{post.comment}</p>
            </div>
        )
    }

}

export default PostCard;