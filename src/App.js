import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Aboutus from './components/pages/Aboutus/Aboutus';
import Home from './components/pages/Home/Home';
import Login from './components/pages/login/Login';
import Register from './components/pages/Register/Register';
import Blogs from './components/pages/Blogs/Blogs';
import Create from './components/pages/Create/Create';
import Contact from './components/pages/Contact/Contact';
import Single from './components/pages/Single/Single';
import Help from './components/pages/Help/Help';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/home' exact component={Home} />
        <Route path='/about'  component={Aboutus} />
        <Route path='/creat'  component={Login} />
        <Route path='/register'  component={Register} />
        <Route path='/blog'  component={Blogs} />
        <Route path='/create'  component={Create} />
        <Route path='/contact'  component={Contact} />
        <Route path='/single'  component={Single} />
        <Route path='/help'  component={Help} />
        </Switch>  
    </Router>  
    
  );
}

export default App;
