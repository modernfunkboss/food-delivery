import React from 'react';
import logo from '../../logo.svg';
import './index.css';

import { FaFacebookSquare, FaWhatsappSquare, FaPhoneSquare } from 'react-icons/fa';

import Navbar from '../../components/Navbar';

function Home() {
    const year = new Date().getFullYear();
    return (
        <>
            <Navbar />
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Home
                    </p>
                    <a
                        className="App-link"
                        href="https://leonelinformatica.com.br"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Saiba mais
                    </a>
                </header>
                <footer>
                    <p>&copy; {year} - FOOD Delivery - Simplificando a gestão de delivery</p>
                    <p>Desenvolvido por <a href="#">Leonel Informática</a></p>
                    <div className="social">
                        <FaFacebookSquare className="social-item" />
                        <FaWhatsappSquare className="social-item" />
                        <FaPhoneSquare className="social-item" />
                    </div>

                </footer>
            </div>
        </>
    );
}

export default Home;
