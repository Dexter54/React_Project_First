import React, { Component } from 'react';
import { useNavigate   } from "react-router-dom"
import { Home } from './Home';
import { Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';

import { Link } from 'react-router-dom';

function Dialog(props) {
    return (
        <div color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </div>
    );
}


export class Login extends Component {

    
    
 
    constructor(props) {
        
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = { login: '' };
        
    }

    render() {

        return (
            <Dialog title="Login Page"
                message="Adınız?">
                <input value={this.state.login}
                    onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>
                    Sign Me Up!
                </button>
            </Dialog>
        );
    }

    handleChange(e) {
        this.setState({ login: e.target.value });
    }

    
    handleSignUp() {
        if (this.state.login == "hilgun") {
            const navigate = useNavigate();
            navigate(1);
        } else {

        }
    }
}


