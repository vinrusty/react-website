import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, 
  Route} from 'react-router-dom';
import home from './pages/home';
import products from './pages/products';
import services from './pages/services';

function App() {
  return (
    <>
    <Router>
       <Navbar />
       <Switch>
         <Route path='/' exact component={home}/>
         <Route path='/products' exact component={products}/>
         <Route path='/services' exact component={services}/>
       </Switch>
       <Footer />
    </Router>
    </>
  );
}

export default App;
