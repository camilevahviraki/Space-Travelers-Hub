const ROCKETS = 'space-traveler-hub/src/redux/ROCKETS';

export default function profileReducer(state = [], action) {
  switch (action.type) {
    case ROCKETS: {
      return action.newState;
    }
    default:
      return state;
  }
}

export const reserveRocket = () => {

};
