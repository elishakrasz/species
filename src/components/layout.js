import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import './layout.css'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
                <h1>February</h1>
                <main>
                    {children}
                </main>
            <Footer />
        </>
    )
}

export default Layout
