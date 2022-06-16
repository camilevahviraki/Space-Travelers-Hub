import axios from 'axios';

const MISSIONS_URL = 'https://api.spacexdata.com/v3/missions';
const GET_MISSIONS = 'space-traveler-hub/src/redux/GET_MISSIONS';
const RESERVED_MISSIONS = 'space-traveler-hub/src/redux/RESERVED_MISSIONS';

export default function MissionsReducer(state = { newMissions: [], profileMissions: [] }, action) {
  switch (action.type) {
    case GET_MISSIONS: {
      if (state.newMissions.length === 0) {
        let newMissions = [];
        action.newState.forEach((Missions) => {
          newMissions = [...newMissions, { Missions, reserved: false, btn: 'Not a Member' }];
          state = newMissions;
        });

        return { newMissions, profileMissions: [] };
      } return state;
    }
    case RESERVED_MISSIONS: {
      state.newMissions.forEach((SpaceXMission) => {
        if (SpaceXMission.Missions[0] === action.Id) {
          SpaceXMission.reserved = !SpaceXMission.reserved;
          if (SpaceXMission.btn === 'Not a Member') {
            SpaceXMission.btn = 'Active Member';
          } else {
            SpaceXMission.btn = 'Not a Member';
          }
        }
      });

      const profileMissions = state.newMissions.filter((Mission) => Mission.reserved === true);

      return { newMissions: state.newMissions, profileMissions };
    }
    default:
      return state;
  }
}

export const reserveMission = (Id) => ({ type: RESERVED_MISSIONS, Id });

export function displayMissions() {
  return (dispatch) => {
    axios.get(MISSIONS_URL).then(
      (response) => {
        const newState = Object.entries(response.data);
        dispatch({ type: GET_MISSIONS, newState });
      },
    );
  };
}
