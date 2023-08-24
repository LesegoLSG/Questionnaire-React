import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Questionnaire from './Pages/Questionnaire';
import Create from './Pages/Create'
import Sidebar from './Components/Sidebar';

function App() {




  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
