

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './home/Home'
import Login from './login/Login'
import Neww from './new/Neww'
import Single from './single/single'
import List from './list/List'
function App() {
  return (
    
    <Router>
      <div className="App">
      
      <Routes>
          
        <Route path="/" element = {<Home/>} />
        <Route path= "/login" element = {<Login/>}/>
        <Route path= "/users/new" element = {<Neww/>}/>
        <Route path= "/users/:id" element = {<Single/>}/>
        <Route path= "/users/list" element = {<List/>}/>

        </Routes>
        
     
      </div>
    </Router>
  );
}

export default App;
