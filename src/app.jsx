import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.scss";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from './components/home/home';
import MovieDetail from './components/mdetail/movie-detail';
import PageNotFound from './components/404/page-not-found';
const App = () => {
    return (
        
        <div className="App">
            <Router>
                <Header />
                <div className="container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="movie/:imdbId" element={<MovieDetail/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
                </div>
                <Footer />
            </Router>
        </div>
        
    );
};

export default App;
