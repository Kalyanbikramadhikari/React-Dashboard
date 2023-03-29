

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './home/Home'
import Login from './login/Login'
import Neww from './new/Neww'
import Single from './single/single'
import List from './list/List'
import { productInputs, userInputs } from './formSource'
import "./style/dark.scss"

function App() {


  return (
    
    <Router>
      <div className="App ">
      
      <Routes>
          
        <Route path="/" element = {<Home/>} />
        <Route path= "/login" element = {<Login/>}/>
        <Route path= "/users/new" element = {<Neww inputs={userInputs} title="Add New User"/>}/>
        <Route path= "/products/new" element = {<Neww inputs={productInputs} title="Add New Product"/>}/>

        <Route path= "/users/:id" element = {<Single/>}/>
        <Route path= "/users" element = {<List/>}/>

        </Routes> 
        
     
      </div>
    </Router>
  );
}

export default App;
