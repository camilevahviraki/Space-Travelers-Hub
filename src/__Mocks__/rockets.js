const RESERVED_ROCKETS = 'space-traveler-hub/src/redux/RESERVED_ROCKETS';

export const InitState = {
  newRockets: [
    { id: 0, rocket: 'rocket1', reserverd: false },
    { id: 1, rocket: 'rocket2', reserverd: false },
    { id: 2, rocket: 'rocket3', reserverd: false },
    { id: 3, rocket: 'rocket4', reserverd: false },
  ],
  profileRockets: [

  ],
};

export default function RocketsReducer(
  state = InitState,
  action,
) {
  switch (action.type) {
    case RESERVED_ROCKETS: {
      state.newRockets.forEach((SpaceXrocket) => {
        if (SpaceXrocket.id === action.rocketId) {
          SpaceXrocket.reserverd = !SpaceXrocket.reserverd;
        }
      });

      const profileRockets = state.newRockets.filter(
        (rocket) => rocket.reserverd === true,
      );

      return { newRockets: state.newRockets, profileRockets };
    }
    default:
      return state;
  }
}

export const reserveRocket = (rocketId) => ({
  type: RESERVED_ROCKETS,
  rocketId,
});
