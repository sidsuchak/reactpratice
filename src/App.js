// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
// import NavigationBar from './components/my-project/NavigationBar';
import "bootstrap/dist/css/bootstrap.min.css";
// import RegistrationForm from './components/my-project/RegistrationForm'
// import { Form } from 'react-bootstrap';

// import AxiosExample from './components/AxiosExample';

// import EventBind from './components/EventBind';
// import Parent from './components/Parent';
// import GreetFile from './components/GreetFile';
// import NameList from './components/NameList';
// import { render } from '@testing-library/react';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import TableExample from './components/TableExample';
// import ButtonClick from './components/ButtonClick';
// import Message from './components/Message';
// import Counter from './components/counter';
// import FunctionClick from './components/FunctionClick';

import MusicPlayer from './components/my-project/MusicPlayer';

class App extends Component {
  render(){
    return (
      <div style={{backgroundColor: 'black', height: 1000}} className="App">
        
        {/* <Parent/> */}
        {/* <Counter/> */}
        {/* <Welcome/> */}
        {/* <Greet name='Sid' nameType='FirstName'>
          <p>Children props</p>
        </Greet>
        <Greet name='Mahi' nameType='middleName'/>
        <Greet name='Suchak' nameType='lastName'/> */}
        {/* <Hello/> */}

        {/* <Message/> */}
        {/* <ButtonClick/>
        <div id="testButton"></div> */}

        {/* <FunctionClick/> */}
        {/* <EventBind/> */}


      {/* <GreetFile/> */}

      {/* <NameList/> */}

      {/* <NavigationBar/> */}
      {/* <Form/> */}


      {/* <RegistrationForm/> */}
      <MusicPlayer/>
      {/* <Parent/> */}


      </div>
    );
  }
 
}

export default App;
