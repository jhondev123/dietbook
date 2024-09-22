// pages/_app.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import '../styles/globals.css'; // Importe o CSS global aqui
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header />
            <Component {...pageProps} />;
            <Footer />
        </>
    );
}

export default MyApp;
