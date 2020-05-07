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
import Mentorsprofile from './components/Mentorsprofile/Mentorsprofile';
import LoginPage from './pages/Login';
import ContactPage from './pages/Contact';
class App extends Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDate: new Date()
    }
  }
  render() {
    const { selectedDate } = this.state;
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/contact">
              <ContactPage />
            </Route>
            <Route path="/login">
              <LoginPage />
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
