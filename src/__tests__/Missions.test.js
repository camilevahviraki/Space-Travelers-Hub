import MissionsReducer, { reserveMission, initState} from '../__Mocks__/missions';

const output1 = {
    newMissions: [
      {'id': 0, mission: 'mission1', reserverd: false},
      {'id': 1, mission: 'mission2', reserverd: false},
      {'id': 2, mission: 'mission3', reserverd: true},
      {'id': 3, mission: 'mission4', reserverd: false}
    ],
    profileMissions: [
        {'id': 2, mission: 'mission3', reserverd: true}
    ]
  }
// console.log('missions', MissionsReducer(initState, reserveMission(2)));
describe('Join mission test', () => {
    test('Joining mission', () => {
        expect(MissionsReducer(initState, reserveMission(2))).toEqual(output1);
        
    });
  });