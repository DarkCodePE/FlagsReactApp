import React, { useState, useEffect } from 'react';
import './App.css';
import CountryList from './components/countryList';
import CountryAction from './components/countryAction';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CountryDetails from './components/countryDetails';
import Header from './components/Header';
//redux
import { Provider } from 'react-redux';
import store from './store';
//components
function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [checked, setChecked] = useState(false)
  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode'

  const changeMedia = (mq) => {
    setDarkMode(mq.matches)
    setChecked(mq.matches)
  }

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    mq.addListener(changeMedia)
    setDarkMode(mq.matches)
    setChecked(mq.matches)
    return () => {
      mq.removeEventListener(changeMedia)
    }
  }, [])

  return (
    <main className={mainClass}>
       <Router>
        <Provider store={store}>
          <div className="App">
            <Header setDarkMode={setDarkMode} darkMode={darkMode} />
            <Switch>
                <Route exact path="/">
                  <CountryAction />
                  <CountryList />
                </Route>
                <Route exact path="/country/:id" component={CountryDetails} />
            </Switch> 
          </div>
        </Provider>
      </Router>
    </main>
  );
}
export default App;
