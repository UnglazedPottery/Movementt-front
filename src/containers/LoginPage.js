import React from "react";
import "../App.css";
import { useDispatch, useSelector } from 'react-redux'

function LoginPage() {

    const dispatch = useDispatch()

    function handleLogin(e) {
        console.log("HANDLE-LOGIN")

        e.preventDefault()
        fetch('http://localhost:3000/login', {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: e.target.username.value,
                password: e.target.password.value
            })
        })
            .then(resp => resp.json()) // <- only runs if the server crashed
            .then(user => {
                if (user.success) {
                    //this.props.setUser(user.username, user.id)   
                    dispatch({ type: 'SET_USER', user: user }) //?how do I get user_id and username in state
                    //this.props.switchPage('feed-page')
                    dispatch({ type: 'SWITCH_PAGE', page: 'feed-page' })
                } else {
                    // If the user provided the wrong credentials
                    //this.setState({ error: true })
                    dispatch({ type: 'ERROR' })
                }

            })

    }

    const props = useSelector(state => state)

    let errorMessage
    console.log("HI MOM", props)
    if (props.error) {
        errorMessage = "Invalid Login"
    }
    return (
        <form className="whitefont font-weight-bold" onSubmit={(e) => handleLogin(e)}>
            <div className="error">{errorMessage}</div><br /><br />
            username:<input name="username" /><br /><br />
            password:<input type="password" name="password" />
            <input type="submit" value="Log In" />
        </form>
    )

}

export default LoginPage