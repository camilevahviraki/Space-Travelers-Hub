import React, { useEffect } from 'react';
import { useSelector, connect, useDispatch } from 'react-redux';
import { displayRockets, reserveRocket } from '../redux/rockets/rockets';
import '../styles/Rocket.css';

function Rockets({ UpdatedRockets, getRockets }) {
  useEffect(() => {
    getRockets();
  }, []);
  const dispatch = useDispatch();
  const Rockets = useSelector((state) => state.RocketsReducer.newRockets);

  const newRocketsR = UpdatedRockets.RocketsReducer.newRockets;

  const assignStyle = (id) => {
    if (newRocketsR) {
      return newRocketsR[id].reserved;
    }
    return false;
  };

  const assignButton = (id) => {
    if (newRocketsR) {
      return newRocketsR[id].btn;
    }
    return 'Reserve Rocket';
  };

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
    <div>
      {
        Rockets.map((spacexdata) => (
          <div key={spacexdata.rocket[0]} className="rocket_container">
            <img src={spacexdata.rocket[1].flickr_images} alt="" className="rocket" />
            <div>
              <h2 className="rocket_title">{spacexdata.rocket[1].rocket_name}</h2>

              <p className="desc_Rockets">
                {assignStyle(spacexdata.rocket[0]) ? (<span className="reserverd_R">Reserved</span>) : ''}
                {spacexdata.rocket[1].description}
              </p>
              <button
                type="button"
                onClick={() => dispatch(reserveRocket(spacexdata.rocket[0]))}
                style={assignStyle(spacexdata.rocket[0]) ? style2 : style1}
              >
                {assignButton(spacexdata.rocket[0])}
              </button>

            </div>
          </div>
        ))
      }
    </div>
  );
}

const mapStateToProps = (state) => ({ UpdatedRockets: state });

const mapDispatchToProps = (dispatch) => ({ getRockets: () => dispatch(displayRockets()) });

export default connect(mapStateToProps, mapDispatchToProps)(Rockets);
