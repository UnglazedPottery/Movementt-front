import React, { useEffect } from 'react';
import './App.css';
import FeedPage from './containers/FeedPage'
import ProfilePage from "./containers/ProfilePage";
import EditProfilePage from "./containers/EditProfilePage";
import LoginPage from "./containers/LoginPage";
import SignupPage from "./containers/SignupPage";
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const props = useSelector(state => state)


  function myEffect() {
    //fetch request to get current user in session
    fetch(`http://localhost:3000/currentuser`, { credentials: 'include' })
      .then(resp => resp.json())
      .then(currentuser => {
        console.log("currentuser: ", currentuser)
        if (!currentuser.error) {
          dispatch({ type: 'SET_USER', user: currentuser })
        }
      })
    //fetch all the posts to populate feed
    fetch(`http://localhost:3000/posts`, { credentials: 'include' })
      .then(resp => resp.json())
      .then(posts => {
        console.log("posts",posts)
        dispatch({ type: 'GET_POSTS', payload: posts })
      })

  }

  useEffect(myEffect, [])

  function handleLogout() {
    fetch('http://localhost:3000/logout', { credentials: 'include' })
    .then(resp => resp.json())
    .then(currentuser => {
      dispatch({ type: 'LOGOUT'})
    })
  }

  let CurrentPage;
  //console.log("current-props:", props)
  if (props.page === 'feed-page') {
    CurrentPage = <FeedPage />
  }
  if (props.page === 'login') {
    CurrentPage = <LoginPage />
  }
  if (props.page === 'signup') {
    CurrentPage = <SignupPage />
  }
  if (props.page === 'profile') {
    CurrentPage = <ProfilePage />
  }
  if (props.page === 'edit-profile') {
    CurrentPage = <EditProfilePage />
  }
  return (
    <div className="container">
      <div className="text-center "><h1>Movementt</h1></div>
      <div className="right font-weight-bold">
        {props.user ?
          <div>
            <div className="whitefont">Logged in as {props.user.username}</div>
            <button class="btn btn-primary btn-sm" onClick={handleLogout}>Logout</button><br /><br />
          </div>
          :
          <div>
            <button class="btn btn-primary btn-sm mr-2" onClick={() => dispatch({ type: 'SWITCH_PAGE', page: "login" })}>Login</button>
            <button class="btn btn-primary btn-sm" onClick={() => dispatch({ type: 'SWITCH_PAGE', page: "signup" })}>Create Account</button><br /><br />
          </div>
        }
      </div>

      {CurrentPage}

    </div>
  )

}

export default App;
