import React, { Component } from "react";
import './style.css'

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <form className="form">
                <h1>{this.props.title}</h1>

                {this.props.children}
                
            </form>
        );
    }
}