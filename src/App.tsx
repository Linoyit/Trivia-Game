import './App.css';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router';

const App: React.FC = () => {

  return(
    <>
    <NavBar /> 
    <Outlet />
    </>
  );
}
export default App;

