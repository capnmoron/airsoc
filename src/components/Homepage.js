import React from 'react'
import About from './About'
import Contact from './Contact'
import Team from './Team'
import Projects from './Projects'
import Milestones from './Milestones'
import Gallery from './Gallery'

function Homepage() {
    return (
        <>
            <About />
            <Team />
            <Projects />
            <Milestones />
            <Gallery />
            <Contact />
        </>
    )
}

export default Homepage