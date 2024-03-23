
import './App.css';
import Navbar from './Navbar';
import Footer  from './Footer';
import { Outlet } from 'react-router-dom';
// import { AuthProvider } from './store/auth';
function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
   
  );
}

export default App;
