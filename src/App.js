import React, {Component} from 'react';
import Nav from './components/NavBar/nav';
import Carousel from './components/Carousel/Carousel';
import HomepageCalendar from './components/HomepageCalendar/Calendar';
import MentorsCalendar from './components/MentorsCalendar/Calendar';
import Cards from './components/Mentors/Cards';
import Testimonials from './components/Students/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Counter from './components/Counter/Counter';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Mentorsprofile from './components/Mentorsprofile/Mentorsprofile';
import DailyAvailability from './components/DailyAvailability/DailyAvailability';



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
      <BrowserRouter>
      <div className="App">
        <Route path="/" exact render={
          ()=>{
            return(
              
              <div>
               
        <div className="Navigation"><Nav/></div>
        <div className="Carousel"><Carousel/></div>
        <div className="Carousel"><Counter/></div>
        
        <div className="HomepageCalendar"><HomepageCalendar fullDate={selectedDate} onDayClick={this.handleDayClick} /></div>
       
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
                <div className="MentorsCalendar"><MentorsCalendar fullDate={selectedDate} onDayClick={this.handleDayClick}  /></div>
                </div>
               
               )
             }
           }/>
           
            <Route path="/:date/:month/:year" component={DailyAvailability}  exact render={
            ()=>{
              return(
                <div>
              <div className="MentorsCalendar">{({match})=><MentorsCalendar fullDate={selectedDate} onDayClick={this.handleDayClick} date={match.params.date} month={match.params.month} year={match.params.year }/>}</div>
              
                </div>
               
                )
              }
            }/>
          
            
      </div>
      </BrowserRouter>
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
      
      }
      )
      
      

  }
}


export default App;

