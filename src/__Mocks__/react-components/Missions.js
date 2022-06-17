import React from 'react';
import { InitState } from '../missions';

function Missions() {
  const style1 = {
    backgroundColor: 'transparent',
  };

  const style2 = {
    backgroundColor: '#D3D3D3',
  };

  return (
    <div>
      <h1>Mission</h1>
      <table>

        <thead>
          <tr>
            <th className="th_title">Mission</th>
            <th className="th_desc desc_head">Description</th>
            <th className="th_button">Status</th>
          </tr>
        </thead>
        <tbody>
          {InitState.newMissions.map((mission, id) => (
            <tr key={mission.id} style={id % 2 === 0 ? style2 : style1}>
              <td className="th_title desc_head">{mission.mission}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Missions;
