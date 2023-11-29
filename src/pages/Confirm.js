import React from 'react';
import { useNavigate } from 'react-router';
import { useMediaQuery } from '../hooks/usemediaquery';

function Confirm() {
    const navigate = useNavigate();
    const isMobile = useMediaQuery("600px");

    return (
        <article style={{ height: "400px", paddingTop: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="./assets/logominimal.jpeg" alt="Minimal Little Lemon Logo" width={40} height={40} />
            <h3 className={isMobile ? 'lead-text' : 'sub-title'} style={{ textAlign: 'center' }}>Your reservation has been completed. Full details will be emailed to you.</h3>
            <button className='button-link' role='link' onClick={() => { navigate('/') }} href="">Go Home</button>
        </article>
    )
}

export default Confirm