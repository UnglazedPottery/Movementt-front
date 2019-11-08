import React from 'react'
import PostCard from '../components/PostCard'
import { useSelector } from 'react-redux'

//class PostIndex extends Component{
function PostIndex() {

    const props = useSelector(state => state)

    return (
        <div className="index">
            {props.posts.map(post => {
                return <PostCard post={post} key={post.id}/>
            })}
        </div>
    )

}

export default PostIndex