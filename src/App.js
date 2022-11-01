import React from 'react';

import ToDo from './Components/ToDo/ToDo.js';
import Footer from './Components/Footer/Footer.js';
import HeaderUI from './Components/Header/Header.js';
export default class App extends React.Component {
  render() {
    return (
      <>
      <HeaderUI/>
      <ToDo />
      <Footer />
      </>
    );
  }
}
