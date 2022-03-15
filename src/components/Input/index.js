import React, { Component } from "react";
import './style.css'
import 'font-awesome/css/font-awesome.min.css';

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {};

    }
    render(){
        return(
            <div className="input-container">

                <div className="div-icon">
                    <i className={`fa fa-${this.props.iconName}`}></i>
                </div>

             <input type={this.props.type} id={this.props.name} 
                placeholder={this.props.placeholder}/>

         </div>
        );
    }
}