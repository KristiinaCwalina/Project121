import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Nav from './components/NavBar/nav';
import Carousel from './components/Carousel/Carousel';
import Calendar from './components/Calendar/Calendar';
import Cards from './components/Mentors/Cards';
import Testimonials from './components/Students/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Counter from './components/Counter/Counter';
import './App.css';
<<<<<<< HEAD
import {BrowserRouter, Route} from "react-router-dom";
import Mentorsprofile from './components/Mentorsprofile/Mentorsprofile';


=======
import ContactPage from './pages/Contact';
>>>>>>> 23a4e9984476137e8c4b51878117405ce645474b
class App extends Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDate: new Date()
    }
  }
<<<<<<< HEAD
  render(){
    const {selectedDate}=this.state;
    return(
      <BrowserRouter>
      <div className="App">
        <Route path="/" exact render={
          ()=>{
            return(
              <div>
        <div className="Navigation"><Nav/></div>
        <div className="Carousel"><Carousel/></div>
        <div className="Carousel"><Counter/></div>
        <div className="Calendar"><Calendar fullDate={selectedDate} onDayClick={this.handleDayClick}/></div>
        <div className="MentorCards"><Cards/></div>
        <div className="StudentTestimonials"><Testimonials/></div>
        <div className="Contact"><Contact/></div>
        <div className="Footer"><Footer/></div>
        </div>);
            }
          }/>
          <Route path="/mentorsprofile" exact render={
            ()=>{
              return(
                <div>
                <div className="MentorsProfile"><Mentorsprofile/></div>
                <div className="Calendar"><Calendar fullDate={selectedDate} onDayClick={this.handleDayClick}/></div>
                </div>
               
                )
              }
            }/>
      </div>
      </BrowserRouter>
=======
  render() {
    const { selectedDate } = this.state;
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/contact">
              <ContactPage />
            </Route>
            <Route path="/">
              <div className="Navigation"><Nav /></div>
              <div className="Carousel"><Carousel /></div>
              <div className="Calendar"><Calendar fullDate={selectedDate} onDayClick={this.handleDayClick} /></div>
              <div className="MentorCards"><Cards /></div>
              <div className="StudentTestimonials"><Testimonials /></div>
              <div className="Contact"><Contact /></div>
              <div className="Footer"><Footer /></div>
            </Route>
          </Switch>
        </div>
      </Router>
>>>>>>> 23a4e9984476137e8c4b51878117405ce645474b
    );
  }
  handleDayClick(newDay) {
    const { selectedDate } = this.state;
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
