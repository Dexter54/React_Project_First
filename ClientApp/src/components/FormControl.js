import React, { Component } from 'react';


function BorderX(props) {

    return (

        <div style={{ border:"1px solid "+ props.colora }}>
            {props.children}
        </div>
    );
}



export class FormControl extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 'wad' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (

            <div>
                <BorderX colora="pink">

                    <form onSubmit={this.handleSubmit}>

                        <label>
                            Name:
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />

                    </form>
                </BorderX >
            </div>
        );
    }


}




