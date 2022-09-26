import React from 'react';
import CarouselSrc from './Carousel/CarouselSrc';
import Conference from './Content/Conference';
import MoneyExpo22 from './Content/MoneyExpo22';
import Speakers from './Content/Speakers';
import Sponsors from './Content/Sponsors';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

function Home(props) {
    return (
        <div>
            <Navbar/>
            <CarouselSrc/>
            <MoneyExpo22/>
            <Speakers/>
            <Conference/>
            <Sponsors/>
            <Footer/>
        </div>
    );
}

export default Home;