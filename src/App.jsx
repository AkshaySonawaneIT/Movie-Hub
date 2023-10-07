import { useState, useEffect } from 'react';
import { fetchDataFromApi } from './utils/api.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration } from './store/homeSlice.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Home from './pages/home/Home.jsx';
import Details from './pages/details/Details.jsx';
import SearchResult from './pages/searchResult/SearchResult.jsx';
import Explore from './pages/explore/Explore.jsx';
import Error from './pages/error/Error.jsx';


function App() {

  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home)

  useEffect(() => {
    fetchApiConfig();
  }, [])


  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration')
      .then((res) => {
        console.log(res);

        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
        }

        dispatch(getApiConfiguration(url));
      })
  }

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:mediaType/:id' element={<Details />} />
        <Route path='/search/:query' element={<SearchResult />} />
        <Route path='/explore/:mediaType' element={<Explore />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
