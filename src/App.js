import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import ProjectDetails from './components/Home/ProjectDetails/ProjectDetails';

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
      { !isLoading && <BrowserRouter>
        
        <Header></Header>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/projectDetails/:id">
            <ProjectDetails></ProjectDetails>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/blog">
            <Blog></Blog>
          </Route>

        </Switch>

          <Footer></Footer>
      </BrowserRouter>}
    </div>
  );
}

export default App;
