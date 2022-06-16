<<<<<<< HEAD
=======
/* eslint-disable */
>>>>>>> 54f29dee7efe76263c9a03e90d394eb5f2300b75
import axios from 'axios';

const ROCKETS_URL = 'https://api.spacexdata.com/v3/rockets';
const GET_ROCKETS = 'space-traveler-hub/src/redux/GET_ROCKETS';
const RESERVED_ROCKETS = 'space-traveler-hub/src/redux/RESERVED_ROCKETS';

<<<<<<< HEAD
export default function RocketsReducer(state = { newRockets: [], profileRockets: [] }, action) {
=======
export default function RocketsReducer(
  state = { newRockets: [], profileRockets: [] },
  action
) {
>>>>>>> 54f29dee7efe76263c9a03e90d394eb5f2300b75
  switch (action.type) {
    case GET_ROCKETS: {
      if (state.newRockets.length === 0) {
        let newRockets = [];
        action.newState.forEach((rocket) => {
<<<<<<< HEAD
          newRockets = [...newRockets, { rocket, reserved: false, btn: 'Reserve Rocket' }];
=======
          newRockets = [
            ...newRockets,
            { rocket, reserved: false, btn: 'Reserve Rocket' },
          ];
>>>>>>> 54f29dee7efe76263c9a03e90d394eb5f2300b75
          state = newRockets;
        });

        return { newRockets, profileRockets: [] };
<<<<<<< HEAD
      } return state;
=======
      }
      return state;
>>>>>>> 54f29dee7efe76263c9a03e90d394eb5f2300b75
    }
    case RESERVED_ROCKETS: {
      state.newRockets.forEach((SpaceXrocket) => {
        if (SpaceXrocket.rocket[0] === action.rocketId) {
          SpaceXrocket.reserved = !SpaceXrocket.reserved;
          if (SpaceXrocket.btn === 'Reserve Rocket') {
            SpaceXrocket.btn = 'Cancel Reservation';
          } else {
            SpaceXrocket.btn = 'Reserve Rocket';
          }
        }
      });

<<<<<<< HEAD
      const profileRockets = state.newRockets.filter((rocket) => rocket.reserved === true);
=======
      const profileRockets = state.newRockets.filter(
        (rocket) => rocket.reserved === true
      );
>>>>>>> 54f29dee7efe76263c9a03e90d394eb5f2300b75

      return { newRockets: state.newRockets, profileRockets };
    }
    default:
      return state;
  }
}

<<<<<<< HEAD
export const reserveRocket = (rocketId) => ({ type: RESERVED_ROCKETS, rocketId });

export function displayRockets() {
  return (dispatch) => {
    axios.get(ROCKETS_URL).then(
      (response) => {
        const newState = Object.entries(response.data);
        dispatch({ type: GET_ROCKETS, newState });
      },
    );
=======
export const reserveRocket = (rocketId) => ({
  type: RESERVED_ROCKETS,
  rocketId,
});

export function displayRockets() {
  return (dispatch) => {
    axios.get(ROCKETS_URL).then((response) => {
      const newState = Object.entries(response.data);
      dispatch({ type: GET_ROCKETS, newState });
    });
>>>>>>> 54f29dee7efe76263c9a03e90d394eb5f2300b75
  };
}
