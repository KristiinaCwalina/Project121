import React, {Component} from 'react';
import Calendar from './components/Calendar/Calendar';

import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      selectedDate: new Date()
    }
  }
  render(){
    const {selectedDate}=this.state;
    return(
      <div className="App">
        <div className="MainContent">
        <Calendar fullDate={selectedDate} onDayClick={this.handleDayClick}/>
        </div>
      </div>
    );
  }
  handleDayClick(newDay){
    const {selectedDate}=this.state;
    this.setState({
      selectedDate: new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        newDay
      )
      })
  }
}


export default App;
