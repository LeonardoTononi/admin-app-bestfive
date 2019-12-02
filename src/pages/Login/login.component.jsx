import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router'
import firebase from '../../firebase'
import { AuthContext } from '../../Auth'

import './login.styles.scss'
import FiveHand from '../../assets/violetHand.png'

const Login = ({ history }) => {

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/dashboard")
      } catch (error) {
        alert(error)
      }
    },
    [history]
  )

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/dashboard" />
  }

  return (
    <div className="login-container">
      <h1><img src={FiveHand} alt="hand five" className="b5-hand" /> Bestfive</h1>
      <form onSubmit={handleLogin}>
        <div className="row">
          <label>Email</label>
          <input
            name="email"
            type="email"
          />
        </div>
        <div className="row">
          <label>Password</label>
          <input
            name="password"
            type="password"
          />
        </div>
        <div className="row">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

export default withRouter(Login)