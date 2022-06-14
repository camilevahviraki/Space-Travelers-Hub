import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import planet from '../images/planet.png';
import '../styles/Header.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <img src={planet} alt="" className="logo_eart"/>
        <h2 className="space_traveler">Space Traveler's Hub</h2>
        <nav>
        <Link to='./' >Rockets</Link>
        <Link to='./Missions' >Missions</Link>
        <Link to='./Profile' >Profile</Link>
        </nav>
      </header>
    )
  }
}
