import Nav from './components/Nav';
import About from './components/About';
import PRODUCTS_PAGE from './components/PRODUCTS_PAGE';
import Footer from './components/footer';
import Cart from './components/Cart';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>

  {/* Toggle pages */}
      <Switch>
        
          <Route exact path='/'>
            <About/>
            <PRODUCTS_PAGE/>
            <Footer/>

          </Route>
          <Route exact path='/cart'>
            <Cart />
            <Footer />
          </Route>

      </Switch>
    </div>
  );
}

export default App;
