import './App.css';
import LandingPage from './LandingPage';
import SelectionPage from './SelectionPage';
import Navbar from './Navbar';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TrainingPage from './TrainingPage';
import GenerationPage from './GenerationPage';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
              <LandingPage />
          </Route>
          <Route path="/select">
            <SelectionPage />
          </Route>
          <Route path="/training">
            <TrainingPage />
          </Route>
          {/* <Route path="/blogs/:id">
            <BlogDetails />
          </Route> */}

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
