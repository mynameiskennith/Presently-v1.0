import './App.css';
import LandingPage from './LandingPage';
import SelectionPage from './SelectionPage';
import Navbar from './Navbar';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import RatingPage from './RatingPage';
import TrainingPage from './TrainingPage';
import GenerationPage from './GenerationPage';
import { useState, useEffect } from 'react';

function App() {
  const [navState, setNavState] = useState({
    isVisible: true, // Whether the Navbar should be visible
    isHero: false,   // Whether to show "Generate" and "Rate" links
  });

  const location = useLocation();

  useEffect(() => {
    if (['/select'].includes(location.pathname)) {
      // Hide Navbar on the Selection, Login, and Signup pages
      setNavState({ isVisible: false, isHero: false });
    } else if (['/', '/login', '/signup'].includes(location.pathname)){
      // On Landing page, show Navbar with "SignUp" and "Login" links
      setNavState({ isVisible: true, isHero: false });
    } else {
      // On other pages, show Navbar with "Generate" and "Rate" links
      setNavState({ isVisible: true, isHero: true });
    }
  }, [location.pathname]);

  return (
    <div className="App">
      {navState.isVisible && <Navbar isHero={navState.isHero} />}
      <div className="content">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/select">
            <SelectionPage />
          </Route>
          <Route path="/generate">
            <GenerationPage />
          </Route>
          <Route path="/training">
            <TrainingPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/rating">
            <RatingPage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
