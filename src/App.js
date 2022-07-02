import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Homepage from './components/Homepage';
import TeamPage from './components/TeamPage';
import Navbar from './components/Navbar';
import ProjectsPage from './components/ProjectsPage'
import MilestonesPage from './components/MilestonesPage';
import GalleryPage from './components/GalleryPage'

export default function App() {
  return (
    <>
      <Header/>
      <Navbar/>
      <div className='app_css'>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/teampage' element={<TeamPage/>}/>
        <Route exact path='/projectspage' element={<ProjectsPage/>}/>
        <Route exact path='/milestonespage' element={<MilestonesPage/>}/>
        <Route exact path='/gallerypage' element={<GalleryPage/>}/>
      </Routes>
    </div>
    </>
  );
}
