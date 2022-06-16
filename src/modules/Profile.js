import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import '../styles/profile.css';

function Profile(props) {
  const [profileRockets, setProfileRockets] = useState([]);
  const [profileMissions, setProfileMissions] = useState([]);

  useEffect(() => {
    setProfileRockets(props.selectedRockets.RocketsReducer.profileRockets);
    setProfileMissions(props.selectedRockets.MissionsReducer.profileMissions);
  }, []);

  return (
    <div className="profile">
      <div className="banner">
        <h3>My Missions</h3>
        <div>
          { profileMissions.map((mission) => (
            <p key={mission.Missions[0]}>{mission.Missions[1].mission_name}</p>
          )) }
        </div>
      </div>

      <div className="banner">
        <h3>My Rockets</h3>
        <div>
          { profileRockets.map((rocket) => (
            <p key={rocket.rocket[0]}>{rocket.rocket[1].rocket_name}</p>
          )) }
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({ selectedRockets: state });

export default connect(mapStateToProps)(Profile);
