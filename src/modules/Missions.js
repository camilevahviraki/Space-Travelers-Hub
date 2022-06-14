import React, { useEffect } from 'react';
import { useSelector, connect, useDispatch } from 'react-redux';
import { displayMissions, reserveMission } from '../redux/Missions/missions';

function Missions({ UpdatedMissions, getMissions }) {
  useEffect(() => {
    getMissions();
  }, []);
  const Missions = UpdatedMissions;
  const dispatch = useDispatch();

  return (
    <table>
      {Missions.map((mission) => (
        <tr key={mission.Missions[0]}>
          <th>{mission.Missions[1].mission_name}</th>
          <th>{mission.Missions[1].description}</th>
          <th>
            {
                mission.reserved ? (<span>Active member</span>) : (<span>Not a member</span>)
              }
          </th>
          <th>
            <button type="button" onClick={() => dispatch(reserveMission(mission.Missions[0]))}>
              {mission.reserved ? 'Join Mission' : 'Leave Mission' }
            </button>
          </th>
        </tr>
      ))}
    </table>
  );
}

const mapStateToProps = (state) => ({ UpdatedMissions: state.MissionsReducer.newMissions });

const mapDispatchToProps = (dispatch) => ({ getMissions: () => dispatch(displayMissions()) });

export default connect(mapStateToProps, mapDispatchToProps)(Missions);
