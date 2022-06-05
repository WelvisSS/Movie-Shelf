import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/scripts/Navbar';
import Details from './pages/Details';
import Home from './pages/Home';
import Profile from './pages/Profile'
import ListDetails from './pages/ListDetails'
import Lists from './pages/Lists'
import Login from './pages/LogIn'
import Progress from './pages/Progress'
import ProgressDetailsOverview from './pages/ProgressDetailsOverview'
import ProgressDetailsSeason from './pages/ProgressDetailsSeason'
import Ratings from './pages/Ratings'
import Reset from './pages/Reset'
import Settings from './pages/Settings'
import SignUp from './pages/SignUp'
import ConnectionTestPage from './pages/ConnectionTestPage';

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/details:id" element={<Details/>} />
                    <Route path="/listdetails" element={<ListDetails/>} />
                    <Route path="/lists" element={<Lists/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/profile" element={<Profile/>} />
                    <Route path="/progress" element={<Progress/>} />
                    <Route path="/progressdetailsoverview" element={<ProgressDetailsOverview/>} />
                    <Route path="/progressdetailsseason" element={<ProgressDetailsSeason/>} />
                    <Route path="/ratings" element={<Ratings/>} />
                    <Route path="/reset" element={<Reset/>} />
                    <Route path="/settings" element={<Settings/>} />
                    <Route path="/signup" element={<SignUp/>} />
                    <Route path="/connectiontest" element={<ConnectionTestPage/>} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}
