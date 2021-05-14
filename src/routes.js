import {Switch, Route} from 'react-router-dom'
import Auth from './Components/Auth/Auth'
import Dash from './Components/Dash/Dash'
import Post from './Components/Post/Post'
import Form from './Components/Form/Form'


export default (
    <Switch>
        <Route component={Auth} exact path='/'/>
        <Route component={Dash} exact path='/dash'/>
        <Route component={Post} exact path='/post/:id'/>
        <Route component={Form} exact path='/form' />
    </Switch>
)