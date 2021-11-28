import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>

          <Route exact to="/">
            <Home></Home>
          </Route>

          <Route to="/home">
            <Home></Home>
          </Route>

          <Route to="/about">
            <Home></Home>
          </Route>

        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
