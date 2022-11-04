import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom/dist';
import FormSet from './Components/SettingsForm/SettingsForm';
import ToDo from './Components/ToDo/ToDo.js';
import HeaderUI from './Components/Header/Header.js';
import { AuthContext } from './Context/Auth/Auth';
import { When } from 'react-if';
import Footer from './Components/Footer/Footer.js';
import Auth from './Components/Auth';
const App = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <BrowserRouter>
        <HeaderUI />
        <Auth capability="create">
          <When condition={isLoggedIn}>
            <Routes>
              <Route path="/" element={<ToDo />} />
              <Route path="/settings" element={<FormSet />} />
            </Routes>
          </When>
        </Auth>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
