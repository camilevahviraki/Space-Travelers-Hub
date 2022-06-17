import React from 'react';
import {InitState} from '../../__Mocks__/rockets';

function Rockets({ UpdatedRockets, getRockets }) {
  
  const style1 = {
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    padding: '10px',
    borderRadius: '5px',
  };

  const style2 = {
    backgroundColor: 'white',
    color: 'grey',
    border: '1px solid grey',
    padding: '10px',
    borderRadius: '5px',
    fontWeight: '700',
  };

  return (
    <div className='rocket_page'>
      {InitState.newRockets.map((spacexdata, id) => (
        <div key={id} className='rocket_container'>
         
            <h2 className='rocket_title'>{spacexdata.rocket}</h2>

            <p className='desc_Rockets'>
              {!spacexdata.reserverd? (
                <span className='reserverd_R'>Not Reserved</span>
              ) : (
                <span className='reserverd_R'>Reserved</span>
              )}
            </p>
           
        </div>
      ))}
    </div>
  );
}

export default Rockets;