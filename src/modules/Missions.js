import React, { useEffect, useState } from 'react';
import { useSelector, connect, useDispatch } from 'react-redux';
import { displayMissions, reserveMission } from '../redux/Missions/missions';
import '../styles/Mission.css';

function Missions({ UpdatedMissions, getMissions }) {
  useEffect(() => {
    getMissions();
  }, []);

  const Missions = UpdatedMissions;
  const MissionsDisplayed = useSelector((state) => state.MissionsReducer.newMissions);

  const dispatch = useDispatch();
  const [newMissionU, setNewMissionU] = useState();
  const [btnStatus, setBtnStatus] = useState(false);

  const assignButton = (id) => {
    if (Missions) {
      return Missions[id].btn;
    }
    return 'Not a member';
  };

  const style1 = {
    backgroundColor: 'transparent',
  };

  const style2 = {
    backgroundColor: '#D3D3D3',
  };

  return (
    <table>
      <thead> table</thead>
      {MissionsDisplayed.map((mission, id) => (
        <tr key={mission.Missions[0]} style={id % 2 === 0 ? style2 : style1}>
          <th className="th_title">{mission.Missions[1].mission_name}</th>
          <th className="th_desc">{mission.Missions[1].description}</th>
          <th className="th_button">
            {
                mission.reserved ? (<span className="status1">Active member</span>) : (<span className="status2">Not a member</span>)
              }
          </th>
          <th>
            {mission.reserved ? (
              <button
                className="button_Leave"
                type="button"
                onClick={() => {
                  setNewMissionU(UpdatedMissions);
                  return dispatch(reserveMission(mission.Missions[0]));
                }}
              >
                Join Mission
              </button>
            ) : (
              <button
                className="button_Join"
                type="button"
                onClick={() => {
                  setNewMissionU(UpdatedMissions);
                  return dispatch(reserveMission(mission.Missions[0]));
                }}
              >
                Leave Mission
              </button>
            )}

          </th>
        </tr>
      ))}
    </table>
  );
}

const mapStateToProps = (state) => ({ UpdatedMissions: state });

const mapDispatchToProps = (dispatch) => ({ getMissions: () => dispatch(displayMissions()) });

export default connect(mapStateToProps, mapDispatchToProps)(Missions);
