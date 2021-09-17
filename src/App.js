import { 
    Route,
    BrowserRouter,
    Switch
} from 'react-router-dom';

import AdminPage from './Pages/AdminPage';
import "antd/dist/antd.css";
import Welcome from './Pages/Welcome';

function App () {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ Welcome } />
                <Route path="/monitor" component={ AdminPage } />
                <Route component={ () => (<h1 style={{ textAlign: 'center' }}> 404 - Not Found </h1>) } />
            </Switch>
        </BrowserRouter>
    );
}

export default App;