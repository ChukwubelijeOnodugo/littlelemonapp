import React from 'react';
import Hero from '../components/hero/hero';
import Specials from '../components/specials/specials';
import Testimonials from '../components/testimonials/testimonials';
import Bio from '../components/bio/bio';
import Delivery from '../components/delivery/delivery';
import { useMediaQuery } from '../hooks/usemediaquery';

function DesktopHome() {
    return (
        <>
            <Specials />
            <Testimonials />
            <Bio />
        </>
    )
}

function Home() {
    const isMobile = useMediaQuery("600px");

    return (
        <>
            <Hero />
            {isMobile ? <Delivery /> : <DesktopHome />}
        </>
    )
}

export default Home