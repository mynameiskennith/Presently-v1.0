import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
