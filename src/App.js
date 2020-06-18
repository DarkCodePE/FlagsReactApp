import React from 'react';
import './App.css';
import CountryList from './components/countryList';
import CountryAction from './components/countryAction';
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
          <i class="far fa-moon"></i>
          <CountryAction />
          <CountryList />
        </div>
      </Provider>
    </Router>
  );
}
export default App;
