import React, { PureComponent } from 'react';
import {Button } from '../common/Button';

//pureComponent в нём настроен автоматтический вызов shouldComponentUpdate
export default class AuthLogin extends PureComponent {
constructor(){
    super();

    state = {
        user: {
            email: '',
            password: ''
        }
    };
}
    

    handleSubmit() {
       // this.setState({
          //  ...this.state, 
         //   user: {
         //       email:'test@gmail.com',
         //       password:'123'
            //}
       // })
    }
    handleInputChange = (e) => {
       // console.log(e.target.value);
       this.setState({
        ...this.state, 
        user: {
            //this.state.user,
            [e.target.name]: e.target.value,
            password:'123'
        }
    })
    }

    render() {
        return (
            <form className="form">
                <div className="form__section">
                    <label htmlFor="email">Email</label>
                    <input value={this.state.user.email} type="text" name="email" onChange={this.handleInputChange} />
                 </div>

                <div className="form__section">
                    <label htmlFor="password">Password</label>
                    <input value={this.state.user.password} type="password" name="password" onChange={this.handleInputChange} />
                </div>

                <div className="form__section">
                    <Button onClick={this.handleSubmit}>Submit</Button>
                </div>
            
            </form>
        );
    }
}

