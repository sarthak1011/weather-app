import React from 'react'
import { BrowserRouter as  Router, Route , Switch,Redirect} from 'react-router-dom';
import Daily from './Daily'
import App from './App'


function Index() {
  return (
    <Router>
        <Switch>
       <Route  exact path="/:city/:day"  component={Daily} />
       <Route exact path='/' component={App} />
       <Redirect to="/" />
       </Switch>
    </Router>
  )
}

export default Index
