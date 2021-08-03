import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Album from '../containers/Album';
import AlbumList from '../containers/AlbumList';
import ScrollToTop from '../helpers/ScrollToTop';
import FourOFour from './404';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <AlbumList />
          </Route>
          <Route exact path="/album/:albumName">
            <Album />
          </Route>
          <Route exact path="/404">
            <FourOFour />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
