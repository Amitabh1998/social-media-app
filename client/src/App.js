import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Profile from './components/pages/Profile';
import Search from './components/pages/Search';
import Details from './components/pages/Details';
import './styles/global.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/profile/:id?" component={Profile} />
              <Route path="/search" component={Search} />
              <Route path="/details/:id" component={Details} />
            </Switch>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;