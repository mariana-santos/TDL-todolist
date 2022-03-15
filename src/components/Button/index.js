import React, {Component} from 'react';
import './style.css'

export default class App extends Component{
    render(){
        return(
            <div>
                <button id={this.props.id} type='button'>{this.props.name}</button>
            </div>
        );
    }
}