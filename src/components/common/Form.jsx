import React from 'react';
import { Input } from './Input';
import { Button } from './Button';
import './Form.css';

export default class Form extends React.Component {


    render() {
        return (
            <form className="form__control">
                <div className="form__control_inner">
                    <h3>{title}</h3>
                <Input 
                    type="email" 
                    placeholder="Enter Your Email" 
                    name="email"
                    onChange={e=>{console.log(e.target.value)}}>
                </Input>
                <Input 
                    type="password" 
                    placeholder="Enter Your Password" 
                    name="password"
                    onChange={e=>{console.log(e.target.value)}}>
                </Input>
                <Input 
                    type="password" 
                    placeholder="Repeat Your password" 
                    name="password"
                    onChange={e=>{console.log(e.target.value)}}>
                </Input>
                <Button>Log In</Button>
                </div>
            </form>
        )
    }
}

