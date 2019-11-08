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
        dispatch({ type: 'SET_USER', user: currentuser })
      })
    //fetch all the posts to populate feed
    fetch(`http://localhost:3000/posts`, { credentials: 'include' })
      .then(resp => resp.json())
      .then(posts => {
        dispatch({ type: 'GET_POSTS', payload: posts})
      })

  }

  useEffect(myEffect,[])

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
    <div >
      <div className="center">Movementt</div>
      <div className="right">
        {props.user ?
          <div>
            <p>Logged in as {props.user.username}</p>
            <button onClick={() => dispatch({ type: 'LOGOUT' })}>Logout</button>
          </div>
          :
          <div>
            <button onClick={() => dispatch({ type: 'SWITCH_PAGE', page: "login" })}>Login</button>
            <button onClick={() => dispatch({ type: 'SWITCH_PAGE', page: "signup" })}>Create Account</button>
          </div>
        }
      </div>

      {CurrentPage}

    </div>
  )

}

export default App;
