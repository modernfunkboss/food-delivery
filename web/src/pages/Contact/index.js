import React from 'react';
import './index.css';


import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function Contact() {
    return (
        <>
            <Navbar />
            <div className="App">
                <header className="App-header">
                    <p>
                        Contact
                    </p>
                </header>
                <Footer />
            </div>
        </>
    );
}

export default Contact;
