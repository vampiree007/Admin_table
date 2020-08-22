import React from 'react';
import { Route, Switch} from "react-router-dom";
import UserTable from './components/table/table.component';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={`/`} component={UserTable} />
      </Switch>
    </div>
  );
}

export default App;
