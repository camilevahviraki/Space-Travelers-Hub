import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

function Profile(props) {
  const [profileRockets, setProfileRockets] = useState([]);
  const [profileMissions, setProfileMissions] = useState([]);

  useEffect(() => {
    setProfileRockets(props.selectedRockets.RocketsReducer.profileRockets);
    setProfileMissions(props.selectedRockets.MissionsReducer.profileMissions);
  }, []);

  return (
    <div className="profile">

      <div>
        <h3>Missions</h3>
        { profileMissions.map((mission) => (
          <p key={mission.Missions[0]}>{mission.Missions[1].mission_name}</p>
        )) }
      </div>

      <div>
        <h3>Rockets</h3>
        { profileRockets.map((rocket) => (
          <p key={rocket.rocket[0]}>{rocket.rocket[1].rocket_name}</p>
        )) }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({ selectedRockets: state });

export default connect(mapStateToProps)(Profile);
