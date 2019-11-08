import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const UserHeader = () => {
    const props = useSelector(state => state)
    const dispatch = useDispatch()

    return(
        <div className="border2" onClick={()=> dispatch({ type: 'SWITCH_PAGE', page: 'profile' })}>
            <img className="user-pic" src={props.user.file_url} alt="user pic" height="42" width="42"/><strong>  {props.user.username}</strong>
        </div>
    )
}

export default UserHeader