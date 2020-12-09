import React, {Component} from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllUsers from "./components/all_users/AllUsers";
import AllPosts from "./components/all_posts/AllPosts";
import AllComments from "./components/all_comments/AllComments";

class App extends Component {
    render() {
        return (
            <Router>
                 <div>
                     <div>
                         <Link to={'/users'}>Users</Link>
                     </div>
                     <div>
                         <Link to={'/posts'}>Posts</Link>
                     </div>
                     <div>
                         <Link to={'/comments'}>Comments</Link>
                     </div>
                     <br/>

                     <div className={`app-route`}>
                         <Switch>
                             <Route path={'/users'} render={()=>{
                                 return <AllUsers/>
                             }}/>

                             <Route path={'/posts'} render={() => {
                                 return (<AllPosts/>)
                             }}/>
                             <Route path={'/comments'} render={() => {
                                 return (<AllComments/>)
                             }}/>
                         </Switch>

                     </div>
                 </div>
            </Router>
        );
    }
}

export default App;
