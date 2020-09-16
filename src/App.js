import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header'
import Homepage from './components/homepage'
import Footer from './components/footer'
import Discussion from './Discussion_forum/Discuss';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/discuss" component={Discussion} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
