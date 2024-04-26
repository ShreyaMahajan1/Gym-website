import './App.css';

import Home from './component/Home';

import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import Master from './layout/Master';





function App() {
  
  return (  
    <div>

      
<BrowserRouter>
      <Routes>
        
        
        


      <Route path="/" element={<Master/>}>
          <Route path="/Home" element={<Home/>}/>
         
          </Route>
          
        
      </Routes>
      </BrowserRouter>
    
      
    </div>
  );
}

export default App;
