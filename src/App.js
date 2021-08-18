import RandomQuote from "./component/RandomQuote";
import TodoList from "./component/TodoList";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./component/Home";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/randomquote' exact component={RandomQuote} />
          <Route path='/todolist' exact component={TodoList} />
        </Switch>
      </Router>
    </>
  );
}
export default App;
