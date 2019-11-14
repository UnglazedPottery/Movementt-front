import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const UserHeader = () => {
    const props = useSelector(state => state)
    const dispatch = useDispatch()

    return(
        <div className="p-2 m-2 bg-light rounded lavender" onClick={()=> dispatch({ type: 'SWITCH_PAGE', page: 'profile' })}>
            <h4>
                <img className="rounded-circle" src={props.user.file_url} alt="user pic" height="80" width="80"/>
                <span className="pl-3">{props.user.username}</span>
            </h4>
            {/* <br/> if page is profile then display bio */}
        </div>
    )
}

export default UserHeader