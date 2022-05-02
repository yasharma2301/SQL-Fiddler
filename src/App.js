import { Suspense, lazy } from 'react';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryProvider } from './Context'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './components/Loader/Loader';
const Home = lazy(() => import('./components/Home/Home'))
const Editor = lazy(() => import('./components/Editor/Editor'))


function App() {
  return (
    <Suspense fallback={<Loader></Loader>}>
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
    </Suspense>
  );
}

export default App;
