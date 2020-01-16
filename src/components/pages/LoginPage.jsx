import React from 'react';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import './SigninPage.css';

export  default class  SinginPage extends React.Component {
    state = {
      user: {
        email: "",
        password: "",
      },
      errors: {},
      submitted: false
    };

    handleClick = event => {
      event.preventDefault();
    }
  
    handleChange = event => {
      const { user } = this.state;
      user[event.target.name] = event.target.value;
      this.setState({ user });
    };
  
    onSubmit = () => {
      const {
        user: { email, password }
      } = this.state;
      let err = {};

    if (!password)  {
      err.password ="Fill this field";
      console.log(err.password);
    }

  
      if (!email) {
        err.email = "Enter your email!";
        console.log(err.email);
      }
  
  
      this.setState({ errors: err }, () => {
        if (Object.getOwnPropertyNames(this.state.errors).length === 0) {
          this.setState({ submitted: true });
        }
      });
    };
  
    render() {
      const {
        submitted,
        errors,
        user: { email, password}
      } = this.state;
      return (
        <React.Fragment>
          {submitted ? (
            <p>Welcome, {email}!</p>
          ) : (
            <React.Fragment>
              <form className="form__control">
              <div className="form__control_inner">
              <h3>Sign In</h3>
              <Input
                label="Email:"
                name="email"
                type="email"
                value={email}
                onChange={this.handleChange}
                placeholder="Enter Your Email..."
                error={errors.email}
                required
                className="input"
              />
  
              <Input
                label="Password"
                name="password"
                type="password"
                value={password}
                onChange={this.handleChange}
                placeholder="Enter Your password..."
                error={errors.password}
                className="input"
                required
              />
             
            <Button
              type="button"
              label="Submit"
              className="btn"
              onClick={this.onSubmit}
            >Log In</Button>
              </div>
              </form>
            </React.Fragment>
          )}
        </React.Fragment>
      );
    }
  }