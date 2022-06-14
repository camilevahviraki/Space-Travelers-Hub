import axios from 'axios';
const ROCKETS_URL = 'https://api.spacexdata.com/v3/rockets';
const GET_ROCKETS = 'space-traveler-hub/src/redux/GET_ROCKETS';
const RESERVED_ROCKETS = 'space-traveler-hub/src/redux/RESERVED_ROCKETS';

export default function RocketsReducer(state = {newRockets: [], profileRockets : []}, action) {
   switch(action.type) {
    case GET_ROCKETS: {
      if(state.newRockets.length === 0) {
        let newRockets = [];
        action.newState.forEach(rocket => {
        newRockets = [...newRockets, {rocket, reserved: false, btn: 'Reserve Rocket'}]
        state = newRockets;
      });

      return {newRockets, profileRockets : [] };
      }else {return state}
      
    }
    case RESERVED_ROCKETS: {

        state.newRockets.forEach((SpaceXrocket) => {
        if(SpaceXrocket.rocket[0] === action.rocket_id) {
          SpaceXrocket.reserved = !SpaceXrocket.reserved;
          if(SpaceXrocket.btn === 'Reserve Rocket') {
            SpaceXrocket.btn = 'Cancel Reservation';
          }else {
            SpaceXrocket.btn = 'Reserve Rocket';
          }
        }
      })

      const profileRockets = state.newRockets.filter((rocket) => rocket.reserved === true);
 
      return {newRockets: state.newRockets, profileRockets: profileRockets};
    }
    default:
      return state;
    }
} 

export const reserveRocket = (rocket_id) => {
    return { type: RESERVED_ROCKETS, rocket_id}
} 

export function displayRockets(){
    return (dispatch) => {
      axios.get(ROCKETS_URL).then(
        (response) => {
          const newState = Object.entries(response.data);
          dispatch({ type: GET_ROCKETS, newState });
        },
      );
    };
  }
