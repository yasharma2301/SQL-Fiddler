import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Editor from './components/Editor/Editor'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='content'>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/editor' exact element={<Editor />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
