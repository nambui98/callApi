import React from 'react';
import './App.css';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'

import Menu from './components/Menu/Menu';


import routes from './routes';

class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Menu/>
          <div className="container mt-5">
            {this.showContentMenus(routes)}
          </div>
        </div>
      </Router>
      
    );
  }
  showContentMenus=(routes)=>{
    var result=null;
    if(routes.length>0){
      result=routes.map((route, index)=>{
        return <Route key={index} path={route.path} exact={route.exact} component={route.main}/>
      })
    }
    return <Switch>
      {result}
    </Switch>
  }
}

export default App;
