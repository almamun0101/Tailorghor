import { Home } from './Home/Home';
import Navbar from './Home/Navbar';
import { School } from './School/School';
import { SchoolList } from './School/SchoolList';

import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <School/>
      {/* <SchoolList/> */}
      {/* <Home/> */}
    </div>
  );
}

export default App;
