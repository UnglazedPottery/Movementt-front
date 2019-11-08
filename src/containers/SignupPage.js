import React from "react";
import "../App.css";
import { useDispatch } from 'react-redux'

function SignupPage() {

    const dispatch = useDispatch()

   function handleSignup(e){
        e.preventDefault()
        fetch('http://localhost:3000/users', {
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
            .then(resp => resp.json())
            .then(user => {
                if (user.success) {
                    dispatch({ type: 'SET_USER', user: user })
                    dispatch({ type: 'SWITCH_PAGE', page: 'feed-page' })
                } else {
                    alert("Username is taken, try another")
                }
            })
    }

        return (
            <form onSubmit={(e) => handleSignup(e)}>
                username:<input name="username" /><br /><br />
                password:<input name="password" type="password" />
                <input type="submit" value="Create Account" />
            </form>
        )
}

export default SignupPage;