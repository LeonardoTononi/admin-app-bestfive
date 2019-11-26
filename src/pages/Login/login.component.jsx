import React, { Component } from 'react';
import './login.styles.scss'
import FiveHand from '../../assets/violetHand.png'

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    console.log(e, 'SUBMIT')
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="login-container">
        <h1><img src={FiveHand} alt="hand five" className="b5-hand" /> Bestfive Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <label>Email</label>
            <input
              name="email"
              type="email"
              value={email}
              onChange={this.handleChange} />
          </div>
          <div className="row">
            <label>Password</label>
            <input
              name="password"
              type="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <div className="row">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Login