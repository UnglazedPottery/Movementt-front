import React from 'react';
import { useSelector } from 'react-redux'
import CreatePost from '../components/CreatePost'
import UserHeader from '../components/UserHeader'
import PostIndex from './PostIndex'
import SearchBox from '../components/SearchBox'

//class FeedPage extends Component {
function FeedPage() {

    const props = useSelector(state => state)
    let createPost, userHeader

    if (props.user) {
        createPost = <CreatePost />
        userHeader = <UserHeader />
    }

    return (
        <div className="container-fluid">
            {createPost}
            <div class="row">
                <div class="col-sm-8" >
                    <PostIndex />
                </div>
                <div class="col-sm-4 " >
                    {userHeader}
                    <SearchBox />
                </div>
            </div>
        </div>
    );

}

export default FeedPage;