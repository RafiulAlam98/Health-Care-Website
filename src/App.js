import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutUs from './Pages/About/AboutUs';
import Doctors from './Pages/Doctors/Doctors';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Home/Header/Header';
import Appointment from './Pages/Appointment/Appointment';
import AuthProvider from './Pages/Context/AuthProvider';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Register from './Pages/Register/Register';
import Footer from './Pages/Home/Footer/Footer';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/about">
              <AboutUs></AboutUs>
            </PrivateRoute>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>

            <PrivateRoute path="/appointment/:serviceId">
              <Appointment></Appointment>
            </PrivateRoute>
            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
