import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

//class CreatePost extends Component {
function CreatePost() {

    const dispatch = useDispatch()
    const props = useSelector(state => state)

    function handleUpload(e) {
        e.preventDefault()
        let body = new FormData(e.target)
        console.log("body", body)
        fetch('http://localhost:3000/posts', {
            credentials: 'include',
            method: 'POST',
            body: body //also send user_id
        })
            .then(resp => resp.json())
            .then(post => {
                //if (post.success) {
                    console.log("HERE IS RETURN POST DATA:",post)
                    dispatch({ type: 'ADD_POST', payload: post })
                    dispatch({ type: 'SWITCH_PAGE', page: 'feed-page' }) //trigger page refresh 
                // } else {
                //     dispatch({ type: 'ERROR' })
                // }

            })
            .catch(err =>  console.log(err))

    }

    function handleChange(e) {
        // this.setState({[event.target.name]: event.target.value})
        dispatch({ type: 'HANDLE_COMMENT', payload: e.target.value })
      }

    let errorMessage
    if (props.error) {
        errorMessage = "Post failed to create"
    }
    return (
        <div className="border2">
            <form onSubmit={(e) => handleUpload(e)}>
                Create Post<br />
                <div className="error">{errorMessage}</div><br /><br />
                <label for="file">Upload Image or Video:</label>
                <input type="file" id="file" name="file"></input><br />
                <label for="comment">Add comment:</label>
                <input name="comment" id="comment" onChange={handleChange} value={props.comment}></input><br />
                <input type="hidden" name="user_id" value={props.user.id}/>
                {/* <input type="hidden" name="username" value={props.username}/> */}
                <button>Submit</button>
            </form>
        </div>
    );
};

// const mapDispatchToProps = dispatch => ({
//     addTodo: formData => dispatch({ type: 'ADD_POST', payload: formData })
// })

export default CreatePost