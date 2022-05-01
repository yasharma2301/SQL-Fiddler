import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Editor from './components/Editor/Editor'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryProvider } from './Context'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer position="top-right" autoClose={3000}/>
      <QueryProvider>
        <div className='content'>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/editor' exact element={<Editor />} />
          </Routes>
        </div>
      </QueryProvider>
    </BrowserRouter>
  );
}

export default App;
