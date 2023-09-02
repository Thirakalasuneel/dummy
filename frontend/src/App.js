import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ListTask from './ListTask';
import UpdateList from './UpdateList';
import Login from './Login';
import CreateList from './CreateList';

function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}/>

        <Route path='/list' element={<ListTask />}></Route>
        <Route path='/create' element={<CreateList/>}></Route>
        <Route path='/update/:id' element={<UpdateList />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App