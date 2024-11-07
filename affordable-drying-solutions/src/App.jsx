import './App.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Header from './Header';
import Products from './Products';
import Footer from './Footer';

function App() {

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className='flex-grow'>
          <Routes>
            <Route path='/'>
              <Route index element={<Navigate to="products"/>}/>\
              <Route path='products' element={<Products />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
