import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';

function App() {
  const [isLoading,setIsLoading] = useState(false);
  useEffect( () => {
    setIsLoading(true);

    setTimeout( () => {
      setIsLoading(false);
    },2000)
  },[])

  return (
    <div className="App">
        {
          isLoading && <div style={{height: '100vh'}} className="d-flex justify-content-center align-items-center">
              <div className="spinner-border p-5 text-light-green" role="status">
                  <span className="visually-hidden">Loading...</span>
              </div>
          </div>
        }
        {!isLoading && <BrowserRouter>
        
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

          <Footer></Footer>
      </BrowserRouter>}
    </div>
  );
}

export default App;
