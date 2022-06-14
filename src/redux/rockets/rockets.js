import axios from 'axios';
const ROCKETS_URL = 'https://api.spacexdata.com/v3/rockets';
const GET_ROCKETS = 'space-traveler-hub/src/redux/GET_ROCKETS';

export default function RocketsReducer(state = [], action) {
   switch(action.type) {
    case GET_ROCKETS: {

        return action.newState;
    }
    default:
      return state;
   }
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