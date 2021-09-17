import { 
    Route,
    BrowserRouter,
    Switch
} from 'react-router-dom';

import AdminPage from './Pages/AdminPage';
import "antd/dist/antd.css";

function App () {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ AdminPage } />
                <Route path="*" component={ () => (<h1 style={{ textAlign: 'center' }}> 404 - Not Found </h1>) } />
            </Switch>
        </BrowserRouter>
    );
}

export default App;