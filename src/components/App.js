import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Album from '../containers/Album';
import AlbumList from '../containers/AlbumList';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <AlbumList />
        </Route>
        <Route exact path="/album">
          <Album />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
