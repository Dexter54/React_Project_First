import React, { Component } from 'react';
import { Suspense } from 'react';
import { Badge, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import '../MySass.scss';
import Form from 'react-bootstrap/Form';
import { NumberList } from './Wrapper';
import { useContext } from 'react';
import FancyButton from './FanvyButton';
import { left } from '@popperjs/core';
import { FetchData } from './FetchData';
import { FormControl } from './FormControl';
import { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { Toolbarx } from './math';
import { ThemeContext } from './context'

// Bundle code split webpack
//import("./math").then(math => {
//    console.log(math.add(16, 26));
//});


function MyComponent(props) {

    const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;

    });


    return (
        <div>
            <p>You clicked {count} times</p>
            <Button variant="primary" onClick={() => setCount(count + 1)}>
                Click me
            </Button>
        </div>
    );


}

function divCreate(temp) {
    return (
        <div style={{ display: 'inline' }}>
            {temp}
        </div>
    );

}
function areEqual(prevProps, nextProps) {
    /*
    return true if passing nextProps to render would return
    the same result as passing prevProps to render,
    otherwise return false
    */
}
export default React.memo(MyComponent, areEqual);

let user;


export class Home extends Component {

    static displayName = Home.name;
    numbers = [1, 2, 3, 4, 5];

    items = [{
        id: 1,
        term: "f",
        description: "first"
    }, {
        id: 2,
        term: "s",
        description: "second"
    }];

    constructor(props) {
        super(props);
        const root = document.documentElement;

        this.state = {
            color: true,
            //user : 5// <-------  THIS LINE

        }

        this.changecolor = this.changecolor.bind(this);
    }



    increase() {

        this.setState({
            user: this.state.user + 1
        });
    }

    changecolor() {
        const root = document.documentElement;

        if (this.state.color == true) {
            this.setState({
                color: false
            });
            //Card.bg.setProperty('color', 'blue');
            this.card_class = "success";
        } else {
            this.setState({
                color: true
            });
            this.card_class = "danger";
            //document.documentElement.style.setProperty('.card-text.color', 'white');
        }

    }



    render() {


        let user = 2;
        const element = (
            <h1 style={{ float: 'left', display: 'inline', width: '100%' }}>
                Hello, {divCreate(user)}
            </h1>
        );
        let card_class = this.state.color ? "success" : "danger";
        return (
            <div>

                <div>

                    <Badge bg="secondary">Okul Otomasyon Sistemi</Badge>

                </div>

                <div>
                    {[
                        'Primary',

                    ].map((variant) => (
                        <Card
                            bg={card_class}
                            key={variant}
                            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                            style={{ width: '25rem' }}
                            className={card_class}
                        >
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Title>{variant} Card Title </Card.Title>
                                <Card.Text>
                                    Öðrenci ekleme çýkartma iþlemi yapabilirsiniz.
                                </Card.Text>
                                <Button variant="primary" onClick={this.changecolor}>Changexx Color</Button>
                            </Card.Body>
                        </Card>
                    ))}


                </div>
                <MyComponent counter={element} />


                <br />
                <br />

                <LoginControl />

                <br />
                <br />

                <Form2 />
                <NumberList dizi={this.numbers} />

                <React.Fragment>
                    <Columns />
                    <FetchData />
                </React.Fragment>

                <FormControl />

                <Glossary items={this.items} />

                <ThemeContext.Provider value="danger">
                    <Toolbarx />
                </ThemeContext.Provider>
          
            </div>
        );
    }

}



const buttoncontext = React.createContext();


class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <buttoncontext.Provider value={this.handleLogoutClick} >
                <ThemedButton state={isLoggedIn} />  </buttoncontext.Provider>;
        } else {
            button = <buttoncontext.Provider value={this.handleLoginClick} >
                <ThemedButton state={isLoggedIn} />  </buttoncontext.Provider>;
        }

        return (
            <div>

                {button}
            </div>
        );
    }
}

class ThemedButton extends React.Component {
    // Assign a contextType to read the current theme context.
    // React will find the closest theme Provider above and use its value.
    // In this example, the current theme is "dark".
    static contextType = buttoncontext;
    render() {

        if (this.props.state) {

            return <Button variant="success" onClick={this.context}>
                Login
            </Button>;
        } else {

            return <Button variant="danger" onClick={this.context}>
                Logout
            </Button>

        }
    }
}



function LoginButton(props) {
    return (
        <Button variant="success" onClick={this.context}>
            Login
        </Button>
    );
}

function LogoutButton(props) {
    return (
        <Button variant="danger" onClick={props.onClick}>
            Logout
        </Button>
    );
}

export class Form2 extends Component {


    handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>

                <Form.Group className="mb-3" controlId="NameID">

                    <div id="id1">
                        <Form.Label>Isim</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                        <Form.Text className="text">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="NameID">
                    <div style={{ display: "block" }}>
                        <Form.Label>Soyisim</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                        <Form.Text className="text">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </div>
                </Form.Group>

                <Button type="submit">Submit</Button>

            </Form>
        );
    }
}

class Columns extends React.Component {
    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <td style={{ width: "20px", color: "blue" }}>Hello</td>
                        <td style={{ marginLeft: "30px" }}>World</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

function ListItem({ item }) {
    return (
        <Fragment>
            <dt>{item.term}</dt>
            <dd>{item.description}</dd>
        </Fragment>
    );
}

function Glossary(props) {
    return (
        <dl>
            {props.items.map(item => (
                <ListItem item={item} key={item.id} />
            ))}
        </dl>
    );
}


