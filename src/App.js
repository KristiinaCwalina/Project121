import React, {Component} from 'react';
import Calendar from './components/Calendar/Calendar';
import Nav from './components/NavBar/nav';
import Carousel from './components/Carousel/Carousel';

import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.handleDayClick=this.handleDayClick.bind(this);
    this.state={
      selectedDate: new Date()
    }
  }
  render(){
    const {selectedDate}=this.state;
    return(
      <div className="App">
        <div className="container-fluid padding"><Nav/></div>
        <div className="container-fluid padding"><Carousel/></div>
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
