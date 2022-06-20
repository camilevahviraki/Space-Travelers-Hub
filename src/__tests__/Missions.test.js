import MissionsReducer, { reserveMission, InitState } from '../__Mocks__/missions';

const output1 = {
  newMissions: [
    { id: 0, mission: 'mission1', reserverd: false },
    { id: 1, mission: 'mission2', reserverd: false },
    { id: 2, mission: 'mission3', reserverd: true },
    { id: 3, mission: 'mission4', reserverd: false },
  ],
  profileMissions: [
    { id: 2, mission: 'mission3', reserverd: true },
  ],
};

describe('Join mission test', () => {
  test('Joining mission', () => {
    expect(MissionsReducer(InitState, reserveMission(2))).toEqual(output1);
  });
});
