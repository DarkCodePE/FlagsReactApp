import React from 'react';
import './App.css';
import CountryList from './components/countryList';
import CountrySearch from './components/countrySearch'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//redux
import { Provider } from 'react-redux';
import store from './store';
//components
function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Switch>
              <Route exact path="/" component={CountryList} />
              <Route exact path="/search" component={CountrySearch} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}
export default App;
