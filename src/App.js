import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom/dist';
import FormSet from './Components/SettingsForm/SettingsForm';
import ToDo from './Components/ToDo/ToDo.js';
import Footer from './Components/Footer/Footer.js';
import HeaderUI from './Components/Header/Header.js';
export default class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <HeaderUI />
          <Routes>
          <Route path="/"  element={<ToDo/>} />
          <Route path="/settings"  element={<FormSet/>} />
        </Routes>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}
