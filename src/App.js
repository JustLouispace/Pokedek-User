import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import PokemonCollection from './pages/PokemonCollection';
import  MyCollection  from './pages/MyCollection';
import SingleProduct from './pages/SingleProduct';
import Trainer from './pages/Trainer';
import Request from './pages/Request';
import Resetpassword from './pages/Resetpassword';
import Forgotpassword from './pages/Forgotpassword';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="Login" element={<Login />}></Route>PokemonCollection
            <Route path="Register" element={<Register />}></Route>
            <Route path="PokemonCollection" element={<PokemonCollection />}></Route>
            <Route path="my-collection/:slug" element={<MyCollection />}></Route>
            <Route path="singleProduct/:slug" element={<SingleProduct />} />
            <Route path="/trainer" element={<Trainer />} />
            <Route path="/Request" element={<Request />} />
            <Route path="/forgot-password" element={<Forgotpassword />} />
            <Route path="/api/user/reset-password/:slug" element={<Resetpassword />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
