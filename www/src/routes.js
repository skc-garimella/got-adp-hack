import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import RatingIndex from './components/rating-index';
import BattleIndex from './components/battle-index';

//IndexRoute is used when the path matches the parent and NOT any of the child
//paths. Index route is rendered along with the parent component.(PostsIndex and APP)
//post/:id -> id is passed in the params as this.props.params.id in ViewPost
export default (
  <Route path="/" component={App}>
    <IndexRoute component={RatingIndex} />
        <Route path="/kings/:name" component={BattleIndex} />
    
  </Route>
);

/*
<Route path="/kings/:name" component={BattleIndex} />
*/