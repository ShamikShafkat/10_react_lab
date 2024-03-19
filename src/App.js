import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import Register from './register';
import ButtonAdding from './buttonAdding';
import TaskManager from './taskManager';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/buttonAdding" element={<ButtonAdding/>} />
        <Route path="/taskManager" element={<TaskManager/>} />
      </Routes>
    </Router>
  );
}

export default App;
