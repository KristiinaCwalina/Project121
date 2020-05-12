import React, { Component } from 'react'

export class Mentorsprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      company: "",
      languge:"",
      imgSrc: null
    };
  }
  componentDidMount() {
    fetch(`mentorProfile.json`)
      .then(res => res.json())
      .then(data => {
        console.log('ttttttttttttt');
        this.setState({
          name: data.name,
          email: data.email,
          company: data.company,
          skill: data.skill,
          imgSrc: data.photo
        })
      })
  }
  render() {
    return (
      <div>
        <div className="container mt-4 mb-4">
          <div className="row">
            <div className="col-4">
              <img className="rounded-circle w-100" alt='profile' src='data:image/jpeg;base64,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' />
            <button className='btn btn-primary'>Edit Profile</button>
            </div>
            <div className="col-8">
              <ul className="list-group">
                <li className="list-group-item">Name {this.name}</li>
                <li className="list-group-item">Email{this.email}</li>
                <li className="list-group-item">Company{this.company}</li>
                <li className="list-group-item">Skill{this.skill}</li>
              </ul>

            </div>

          </div>
        </div>
      </div>
    )
  }
};

export default Mentorsprofile;
