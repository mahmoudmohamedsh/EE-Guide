import React,{Fragment , useEffect} from 'react';
import Navbar from './Component/layouts/NavBar';
import Landing from './Component/layouts/Landing';
import Makers from './Component/layouts/Maker';
import Component from './Component/layouts/Comp';
import Login from './Component/auth/Login'
import Register from './Component/auth/Register'
import {Route, BrowserRouter as Router,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from './Component/layouts/Alert'
import Profile from './Component/auth/Profile'
//redux
import {Provider} from 'react-redux';
import store from './store';
import {loadUser} from './actions/auth';
import setAuthToken from './utils/setAuthToken'

if(localStorage.token){
  setAuthToken(localStorage.token)
}

const App = () =>{
  useEffect(()=>{
    store.dispatch(loadUser());
  },[])
  return (
    <Provider store={store}>
    <Router>
        <Fragment>
        <Navbar />
          <Route exact path='/' component={Landing} />
          <div>
          <Alert />
          <Switch>
            <Route exact path="/Register" component={Register} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Profile" component={Profile} />
            <Route exact path="/Maker" component={Makers} />
            <Route exact path="/:id" component={Component} />
            
          </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  )};

export default App;
