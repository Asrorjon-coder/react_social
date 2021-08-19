import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Signup1 from "./signup/signup2";

/*
import 'bootstrap/dist/css/bootstrap.min.css';
*/

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Signup1}/>
            </Switch>
        </Router>
    )
}

export default App;