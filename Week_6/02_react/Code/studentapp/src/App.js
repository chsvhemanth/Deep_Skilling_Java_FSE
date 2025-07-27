import './App.css';
import { Home } from './Componants/Home.js';
import { About } from './Componants/About.js';
import { Contact } from './Componants/Contact.js';

function App(){
  return(
    <div className='container'>
      <Home/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App;