import React, { Component } from 'react';
import { Badge, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import '../MySass.scss';
import Form from 'react-bootstrap/Form';



export class NumberList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul> {this.props.dizi}</ul >
        );
    }

}

function hello(){

    return (
        <h>hello</h>
    );
}

//function NumberList(props) {

    

//    const numbers = props.numbers;
//    const listItems = numbers.map((number) =>
//        <li>{number}</li>
//    );
//    return (
//        <ul>{listItems}</ul>
//    );
//}

