import axios from "axios";
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import {Button} from "./stories/Button/Button";
import {PlayerCard} from "./stories/PlayerCard/PlayerCard";
import { useGetPlayerQuery } from "./api/apiSlice" ;
import Home from "./pages/Home";
import Player from "./pages/Player";

function App() {
    return (
        <div>
            <h1> Clash of Clans Player Search </h1>
            
            <Router>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/Player">Player</Link>
                </nav>
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="/Player" element={<Player />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
