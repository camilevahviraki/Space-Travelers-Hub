import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import Header from './modules/Header.js';
import Missions from './modules/Missions';
import Rockets from './modules/Rockets';
import Profile from './modules/Profile';
import store from './redux/allReducers';

ReactDOM.render(
 <Provider store={store}>
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="Missions" element={<Missions />} />
      <Route path="Profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
 </Provider>
,
  document.getElementById('root')
);
