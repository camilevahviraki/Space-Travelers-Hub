import React, { useEffect } from 'react';
import { useSelector, connect, useDispatch } from 'react-redux';
import { displayMissions, reserveMission } from '../redux/Missions/missions';
import '../styles/Mission.css';

/* eslint-disable */
function Missions({ getMissions }) {
  useEffect(() => {
    getMissions();
  }, []);

  const MissionsDisplayed = useSelector((state) => state.MissionsReducer.newMissions);

  const dispatch = useDispatch();

  const style1 = {
    backgroundColor: 'transparent',
  };

  const style2 = {
    backgroundColor: '#D3D3D3',
  };

  return (
    <table>
      <thead>
        <tr>
          <th className="th_title">Mission</th>
          <th className="th_desc desc_head">Description</th>
          <th className="th_button">Status</th>
        </tr>
      </thead>
      <tbody>
        {MissionsDisplayed.map((mission, id) => (
          <tr key={mission.Missions[0]} style={id % 2 === 0 ? style2 : style1}>
            <td className="th_title desc_head">{mission.Missions[1].mission_name}</td>
            <td className="th_desc">{mission.Missions[1].description}</td>
            <td className="th_button">
              {
                mission.reserved ? (<span className="status1">Active member</span>) : (<span className="status2">Not a member</span>)
              }
            </td>
            <td>
              {mission.reserved ? (
                <button
                  className="button_Leave"
                  type="button"
                  onClick={() => dispatch(reserveMission(mission.Missions[0]))}
                >
                  Leave Mission
                </button>
              ) : (
                <button
                  className="button_Join"
                  type="button"
                  onClick={() => dispatch(reserveMission(mission.Missions[0]))}
                >
                  Join Mission
                </button>
              )}

            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const mapStateToProps = (state) => ({ UpdatedMissions: state });

const mapDispatchToProps = (dispatch) => ({ getMissions: () => dispatch(displayMissions()) });

export default connect(mapStateToProps, mapDispatchToProps)(Missions);
