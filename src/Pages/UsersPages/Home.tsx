import Banner from '@/myComponents/Banner/Banner';
import Featured from '@/myComponents/Featured/Featured';
import Footer from '@/myComponents/Footer/Footer';
import Testimonials from '@/myComponents/Testomonials/Testimonials';
import React from 'react';

const Home = () => {
    return (
        <div>
           <Banner />
           <Featured />
           <Testimonials/>
           <Footer/>
        </div>
    );
}

export default Home;
