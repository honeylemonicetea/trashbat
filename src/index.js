import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/Homepage';
import Images from './components/images/Images'
import Menu from './components/HOME/Menu';
import Fashion from './components/fashion/Fashion'
import Music from './components/music/Music';
import Movies from './components/movies/Movies';
import Books from './components/books/Books';
import MovieDetail from './components/movies/MovieDetail'
import BookDetail from './components/books/BookDetail'
import ClothingDetail from './components/fashion/ClothDet'


ReactDOM.render(
  <BrowserRouter>
    <Menu></Menu>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/images" element={<Images />}></Route>
      <Route path="/fashion" element={<Fashion />}></Route>
      <Route path="/music" element={<Music />}></Route>
      <Route path="/movies" element={<Movies />}></Route>
      <Route path="/books" element={<Books />}></Route>
      <Route path="/movie/:id" element={<MovieDetail />}></Route>
      <Route path="/book/:id" element={<BookDetail />}></Route>
      <Route path="/book/:id" element={<BookDetail />}></Route>
      <Route path="/fashion/:id" element={<ClothingDetail />}></Route>
    </Routes>
    {/* <React.StrictMode>
      <App />
    </React.StrictMode> */}
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();