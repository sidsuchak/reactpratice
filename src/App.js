// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
// import { render } from '@testing-library/react';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import TableExample from './components/TableExample';
// import ButtonClick from './components/ButtonClick';
// import Message from './components/Message';
// import Counter from './components/counter';
import FunctionClick from './components/FunctionClick';

class App extends Component {
  render(){
    return (
      <div className="App">
        {/* <Counter/> */}
        {/* <Welcome/> */}
        {/* <Greet name='Sid' nameType='FirstName'>
          <p>Children props</p>
        </Greet>
        <Greet name='Mahi' nameType='middleName'/>
        <Greet name='Suchak' nameType='lastName'/> */}
        {/* <Hello></Hello> */}

        {/* <Message/> */}
        {/* <ButtonClick/>
        <div id="testButton"></div> */}

        <FunctionClick/>

      </div>
    );
  }
 
}

export default App;
