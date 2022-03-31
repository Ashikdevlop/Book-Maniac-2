          
          
          
          
          import { BrowserRouter, Route, Routes } from 'react-router-dom';
          import About from './Components/About/About'
import './App.css';
          import Home from './Components/Home/Home';
           function App() {
             return (
               <BrowserRouter>
               <Routes>
             <Route path= "/" element={<Home/>} />
                 <Route path="about" element={<About/>}  />
               </Routes>
               </BrowserRouter>
        
             );
           }
           
           export default App;
