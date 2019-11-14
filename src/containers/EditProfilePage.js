import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function EditProfilePage() {

    const dispatch = useDispatch()
    const props = useSelector(state => state)

    function handleImage(e) {
        e.preventDefault()
        let body = new FormData(e.target)
        //body.append('description', e.target.description.value );
        //console.log("its bob", body)
        fetch(`http://localhost:3000/users/${props.user.id}`, {
            credentials: 'include',
            headers:  {
                //'Content-Type':'application/json'
            },
            method: 'PATCH',
            body: body //JSON.stringify(props.user)
        })
            .then(resp => resp.json())
            .then(user => {
                    console.log("After profile edit fetch request:", user)
                    dispatch({ type: 'HANDLE_PROFILE_EDIT_SUBMIT', payload: user })
                    dispatch({ type: 'SWITCH_PAGE', page: 'profile' })
            })
            //.catch(err =>  console.log(err))
    }

    function handleChange(e) {
        dispatch({ type: 'HANDLE_PROFILE_CHANGE', payload: e.target })
      }

    // let errorMessage
    // if (props.error) {
    //     errorMessage = "Post failed to create"
    // }
    return (
        <div className="lavender">
            <p><strong>Edit {props.user.username}'s profile</strong></p>
            <form onSubmit={(e) => handleImage(e)} onChange={handleChange}>
                {/* <div className="error">{errorMessage}</div><br /><br /> */}
                <label for="avatar">Choose Profile Pic:</label>
                <input type="file" id="avatar" name="avatar"/><br />
                {/* <input type="hidden" name="user_id" value={props.user_id}/> */}
                {/* <input type="hidden" name="username" value={props.username}/> */}
                <label for="description">Write Bio:</label>
                <input name="description" id="description" value={props.description}/><br />
                <input className="btn btn-primary btn-sm m-1" type="submit" value="submit"/>
            </form>

        </div>
    );
};

export default EditProfilePage