import React from 'react'
import '../App.css';
import { useDispatch } from 'react-redux'

//class PostCard extends React.Component {
function PostCard(props) {

    const dispatch = useDispatch()

    let { post } = props;
    return (
        <div className="border m-4 p-1 rounded-lg lavender" key={post.id}>
            {console.log("post", post)}
            <div onClick={()=> dispatch({ type: 'SWITCH_PAGE2', page: 'other-profile', postId: post.id })} >
                <img src={post.user.file_url} alt="user pic " height="42" width="42" className="rounded m-1" />
                <strong> {post.user.username}</strong><br />
            </div>
            <video className="video " controls>
                <source src={post.file_url} type="video/mp4" />
            </video>

            <p>{post.comment}</p>
        </div>
    )

}

export default PostCard;