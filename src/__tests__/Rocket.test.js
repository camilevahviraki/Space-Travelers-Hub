import RocketsReducer, { reserveRocket, InitState } from '../__Mocks__/rockets';
import store from '../__Mocks__/allReducers';

const output1 = {
  newRockets: [
    { id: 0, rocket: 'rocket1', reserverd: false },
    { id: 1, rocket: 'rocket2', reserverd: false },
    { id: 2, rocket: 'rocket3', reserverd: true },
    { id: 3, rocket: 'rocket4', reserverd: false },
  ],
  profileRockets: [
    { id: 2, rocket: 'rocket3', reserverd: true },
  ],
};
// console.log('rockets', rocketsReducer(initState, reserveMission(2)));
describe('Join rocket test', () => {
  test('Joining rocket', () => {
    expect(RocketsReducer(InitState, reserveRocket(2))).toEqual(output1);
  });
});
