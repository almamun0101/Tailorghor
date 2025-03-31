import { Home } from './Home/Home';
import Navbar from './Home/Navbar';
import { School } from './School/School';

import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <School/>
      {/* <Home/> */}
    </div>
  );
}

export default App;
