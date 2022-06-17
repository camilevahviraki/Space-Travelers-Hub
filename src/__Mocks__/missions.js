/* eslint-disable */
import axios from 'axios';

const MISSIONS_URL = 'https://api.spacexdata.com/v3/missions';
const GET_MISSIONS = 'space-traveler-hub/src/redux/GET_MISSIONS';
const RESERVED_MISSIONS = 'space-traveler-hub/src/redux/RESERVED_MISSIONS';

export let InitState = {
  newMissions: [
    {id: 0, mission: 'mission1', reserverd: false},
    {id: 1, mission: 'mission2', reserverd: false},
    {id: 2, mission: 'mission3', reserverd: false},
    {id: 3, mission: 'mission4', reserverd: false},
  ],
  profileMissions: [

  ]
}

export default function MissionsReducer(state = InitState, action) {
  switch (action.type) {
    
    case RESERVED_MISSIONS: {
      state.newMissions.forEach((SpaceXMission, i) => {
        if (SpaceXMission.id === action.Id) {
          SpaceXMission.reserverd = !SpaceXMission.reserverd;
        }
      });

      const profileMissions = state.newMissions.filter(
        (Mission) => Mission.reserverd === true
      );

      return { newMissions: state.newMissions, profileMissions };
    }
    default:
      return state;
  }
}

export const reserveMission = (Id) => ({ type: RESERVED_MISSIONS, Id });
