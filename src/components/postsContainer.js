import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Main from './main';
import PostsList from './postsList';
import User from './user';
import NotFound  from './notFound';


class PostsContainer extends React.Component {
    render() {
        return(
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/posts/:postid" component={PostsList} />
                <Route exact path='/user/:userid' component={User}/>
                <Route component={NotFound}/>
            </Switch>
        )
    }
}

export default PostsContainer;