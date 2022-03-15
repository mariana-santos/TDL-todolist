import React, {Component} from 'react'

import './App.css';
import Form from './components/Form'
import Input from './components/Input'
import Button from './components/Button'

// import { FirebaseService } from './services/firebaseServices'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    // FirebaseService.getDataList('leituras', (dataReceived) => this.setState({data: dataReceived}))
  }

  render(){
  return (   
    <div className="container">

      <Form title="Login with your email">

        <Input type='email' id='email' placeholder='E-mail' iconName='envelope'/>
        <Input type='password' id='password' placeholder='Password' iconName='lock'/>

        <Button id='btnSignIn' name='Sign In'></Button>

        <p className="signup">Not a member?
          <a href="./signup.html"> sign up</a>
        </p>
      </Form>

    </div>
  );
  }
}
