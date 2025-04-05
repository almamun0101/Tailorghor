import { Home } from './Home/Home';
import Navbar from './Home/Navbar';
import { School } from './School/School';
import { SchoolList } from './School/SchoolList';

import './App.css';
import { SchoolDress } from './School/SchoolDress';

function App() {
  return (
    <div>
      <Navbar/>
      {/* <School/> */}
      <SchoolDress/>
      {/* <SchoolList/> */}
      {/* <Home/> */}
    </div>
  );
}

export default App;
