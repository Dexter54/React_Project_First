import React, { Component } from 'react';
import { Suspense } from 'react';
import { Badge, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ThemeContext } from './context'



export function Toolbarx(props) {
    // The Toolbar component must take an extra "theme" prop
    // and pass it to the ThemedButton. This can become painful
    // if every single button in the app needs to know the theme
    // because it would have to be passed through all components.
    return (
        <div >
            <ThemedButton/>
        </div>
    );
}




class ThemedButton extends Component {

    
    static contextType = ThemeContext;

    render() {
        return <Button style={{ width: "50px", height: "70px" }} variant={this.context} />;
    }
}