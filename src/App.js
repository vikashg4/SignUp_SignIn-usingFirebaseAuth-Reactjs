import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import LoginPage from './LoginPage'
// import Signup from './components/Signup';
 import ResponsiveAppBar from './components/ResponsiveAppBar';




function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <LoginPage />
      
    </div>
  );
}

export default App;
