import React, { useEffect } from 'react';
import { useSelector, connect } from 'react-redux';
import { displayRockets } from '../redux/rockets/rockets';

function Rockets({getRockets}) {
   useEffect(()=> {
    getRockets();
   }, [])

   const Rockets = useSelector(state => state.RocketsReducer);
   console.log(Rockets);

  return (
    <div>Rockets</div>
  )
}

const mapDispatchToProps = (dispatch) => ({ getRockets: () => dispatch(displayRockets()) });

export default connect(null, mapDispatchToProps)(Rockets);