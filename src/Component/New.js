import react from "react";
import Form from "./Form";

class New extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-con">
          <Form />
        </div>
      </div>
    );
  }
}

const sidebar = (props) => (
  <>
    <div className="sb-con">
      <BrowserRouter>
        <div>
          <Link to="/" className="navs">
            My Account
          </Link>
          <Link to="/history" className="navs">
            Account History
          </Link>
          <Link to="/settings" className="navs">
            Account Settings
          </Link>
          <Link to="/" className="navs">
            Log out
          </Link>
        </div>
      </BrowserRouter>
    </div>
  </>
);

const showpane = (props) => (
  <>
    <div className="sp-con">
      <BrowserRouter>
        <div>
          <Route path="/" component={Account} exact />
          <Route path="/history" component={Acchistory} />
          <Route path="/settings" component={Accset} />
        </div>
      </BrowserRouter>
    </div>
  </>
);


const userRoutes = (
    <Route path="users" component={Users}>
      <Route path="/user/:userId" component={User} />
    </Route>
  )
   
  export default userRoutes
   
  // routes.js
  import userRoutes from './userRoutes'
   
  const routes = (
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      {userRoutes}
      <Route path="*" component={NoMatch} />
    </Route>
  )
   
  export default routes
   
  // original file
  import routes from './routes'
   
  render((
    <Router history={browserHistory} routes={routes} />
  ), document.body)