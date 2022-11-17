import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home.js';
import Showcase from './Components/Showcase.js';
import './App.css'


function App() {
  return (
    <main>
      <BrowserRouter>
        <div className='titleBar'> Audubon Society </div>
          <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path = '/birds/:birdName' element = {<Showcase />}/>
          </Routes>


      </BrowserRouter>
 
    </main>
  );
}

export default App;
