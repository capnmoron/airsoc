import React from 'react'
import About from './About'
import Contact from './Contact'
import Team from './Team'
import Projects from './Projects'
import Milestones from './Milestones'
import Gallery from './Gallery'
import NavbarH from './NavbarH'

function Homepage() {
    return (
        <>
            <NavbarH />
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