import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

function Profile(props) {
  const [profileRockets, setProfileRockets] = useState([]);

  useEffect(() => {
    setProfileRockets(props.selectedRockets.RocketsReducer.profileRockets);
  }, []);

  return (
    <div>
      <h3>Rockets</h3>
      <div>
        { profileRockets.map((rocket) => (
          <p key={rocket.rocket[0]}>{rocket.rocket[1].rocket_name}</p>
        )) }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({ selectedRockets: state });

export default connect(mapStateToProps)(Profile);
