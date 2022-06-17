import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import planet from '../images/planet.png';
import '../styles/Header.css';

export default class Header extends Component {
  state = {
    rocket: true,
    mission: false,
    profile: false,
  };

  render() {
    return (
      <header>
        <img src={planet} alt="" className="logo_eart" />
        <h2 className="space_traveler">Space Traveler&apos;s Hub</h2>
        <nav>
          <Link
            to="./"
            onClick={() => this.setState({ rocket: true, mission: false, profile: false })}
            style={this.state.rocket ? { textDecoration: 'underline' } : { textDecoration: 'none' }}
          >
            Rockets
          </Link>
          <Link
            style={this.state.mission ? { textDecoration: 'underline' } : { textDecoration: 'none' }}
            to="./Missions"
            onClick={() => this.setState({ rocket: false, mission: true, profile: false })}
          >
            Missions
          </Link>
          <Link
            style={this.state.profile ? { textDecoration: 'underline' } : { textDecoration: 'none' }}
            to="./Profile"
            onClick={() => this.setState({ rocket: false, mission: false, profile: true })}
          >
            Profile
          </Link>
        </nav>
      </header>
    );
  }
}
