import './App.css';
import {UserPage} from './users/UserPage'
import {UserTodo} from './users/UserTodo'
import { Routes, Route,} from "react-router-dom";
import UsersPost from './users/UsersPost'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserPage />} />
        <Route path="user-todo/:id" element={<UserTodo />} />
        <Route path='user-posts/:id' element={<UsersPost />}/>
      </Routes>
    </div>
  );
}

export default App;
